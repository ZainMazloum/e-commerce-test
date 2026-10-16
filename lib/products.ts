// lib/products.ts
import { ObjectId, Filter, Document } from "mongodb";
import { connectDB } from "@/lib/db";
import { Product } from "@/types/domain/product";

// ─── Constants ────────────────────────────────────────────────────────────────
const COLLECTION = "products";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ProductFilters {
    category?: string;
    isOnSale?: boolean;
    minPrice?: number;
    maxPrice?: number;
}

export interface PaginatedResult<T> {
    data: T[];
    total: number;
    page: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

// ─── Shared Helper ────────────────────────────────────────────────────────────
function mapProduct(p: Document): Product {
    const { _id, ...rest } = p;
    return { id: (_id as ObjectId).toString(), ...rest } as Product;
}

function buildFilterQuery(filters: ProductFilters): Filter<Document> {
    const query: Filter<Document> = {};

    if (filters.category) {
        query.category = { $regex: filters.category, $options: "i" };
    }

    if (filters.isOnSale !== undefined) {
        query.isOnSale = filters.isOnSale;
    }

    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
        query.price = {};
        if (filters.minPrice !== undefined) {
            (query.price as Record<string, number>).$gte = filters.minPrice;
        }
        if (filters.maxPrice !== undefined) {
            (query.price as Record<string, number>).$lte = filters.maxPrice;
        }
    }

    return query;
}

// ─── Read Functions ───────────────────────────────────────────────────────────

/**
 * Fetches all products from the database
 */
export async function getAllProducts(): Promise<Product[]> {
    const db = await connectDB();
    const docs = await db.collection(COLLECTION).find().toArray();
    return docs.map(mapProduct);
}

/**
 * Fetches only products where isOnSale is true
 */
export async function getOnSaleProducts(): Promise<Product[]> {
    const db = await connectDB();
    const docs = await db
        .collection(COLLECTION)
        .find({ isOnSale: true })
        .toArray();
    return docs.map(mapProduct);
}

/**
 * Fetches a single product by its MongoDB _id string
 * Returns null if the id is invalid or product not found
 */
export async function getProductById(id: string): Promise<Product | null> {
    if (!ObjectId.isValid(id)) return null;

    const db = await connectDB();
    const doc = await db
        .collection(COLLECTION)
        .findOne({ _id: new ObjectId(id) });

    if (!doc) return null;
    return mapProduct(doc);
}

/**
 * Fetches multiple products by an array of MongoDB _id strings
 * Silently skips any invalid ids
 * Used for server-side cart price validation at checkout
 */
export async function getProductsByIds(ids: string[]): Promise<Product[]> {
    const validObjectIds = ids
        .filter((id) => ObjectId.isValid(id))
        .map((id) => new ObjectId(id));

    if (validObjectIds.length === 0) return [];

    const db = await connectDB();
    const docs = await db
        .collection(COLLECTION)
        .find({ _id: { $in: validObjectIds } })
        .toArray();

    return docs.map(mapProduct);
}

/**
 * Fetches products by category (case-insensitive)
 */
export async function getProductsByCategory(
    category: string
): Promise<Product[]> {
    const db = await connectDB();
    const docs = await db
        .collection(COLLECTION)
        .find({ category: { $regex: category, $options: "i" } })
        .toArray();

    return docs.map(mapProduct);
}

/**
 * Full-text name search (case-insensitive substring match)
 * Falls back to getAllProducts if query is empty
 */
export async function getFilteredProducts(query: string): Promise<Product[]> {
    if (!query.trim()) return getAllProducts();

    const db = await connectDB();
    const docs = await db
        .collection(COLLECTION)
        .find({ name: { $regex: query.trim(), $options: "i" } })
        .toArray();

    return docs.map(mapProduct);
}

/**
 * Fetches products with optional filters and pagination
 * Used for the /products page with Load More and filter bar
 *
 * @param page    - 1-based page number (default 1)
 * @param limit   - items per page (default 12)
 * @param filters - optional category, isOnSale, minPrice, maxPrice
 */
export async function getPaginatedProducts(
    page = 1,
    limit = 12,
    filters: ProductFilters = {}
): Promise<PaginatedResult<Product>> {
    const safePage = Math.max(1, page);
    const safeLimit = Math.min(Math.max(1, limit), 100); // cap at 100
    const skip = (safePage - 1) * safeLimit;

    const query = buildFilterQuery(filters);
    const db = await connectDB();
    const col = db.collection(COLLECTION);

    const [docs, total] = await Promise.all([
        col.find(query).skip(skip).limit(safeLimit).toArray(),
        col.countDocuments(query),
    ]);

    const totalPages = Math.ceil(total / safeLimit);

    return {
        data: docs.map(mapProduct),
        total,
        page: safePage,
        totalPages,
        hasNextPage: safePage < totalPages,
        hasPrevPage: safePage > 1,
    };
}

/**
 * Returns the total count of products matching optional filters
 * Useful for pagination headers or analytics
 */
export async function getProductCount(
    filters: ProductFilters = {}
): Promise<number> {
    const db = await connectDB();
    return db
        .collection(COLLECTION)
        .countDocuments(buildFilterQuery(filters));
}

// ─── Write Functions ──────────────────────────────────────────────────────────

/**
 * Decrements countInStock for a product after a successful order
 * Pass a negative delta to decrease (e.g. delta = -1)
 * Returns false if product not found or stock would go below 0
 */
export async function updateProductStock(
    id: string,
    delta: number
): Promise<boolean> {
    if (!ObjectId.isValid(id)) return false;

    const db = await connectDB();

    const result = await db.collection(COLLECTION).updateOne(
        {
            _id: new ObjectId(id),
            countInStock: { $gte: Math.abs(delta) }, // prevent going below 0
        },
        { $inc: { countInStock: delta } }
    );

    return result.modifiedCount === 1;
}