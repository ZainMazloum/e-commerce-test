"use client";

import { useState } from "react";
import FilterDropdown from "../ui/FilterDropdown";
import {
  CATEGORY_OPTIONS,
  PRICE_OPTIONS,
  MATERIAL_OPTIONS,
  SORT_OPTIONS,
} from "../../lib/data/products";

export default function ProductsFilterBar() {
  const [category,   setCategory]   = useState("all");
  const [priceRange, setPriceRange] = useState("any");
  const [material,   setMaterial]   = useState("all");
  const [sort,       setSort]       = useState("newest");

  return (
    <section className="px-4 pb-6 md:px-8 lg:px-16">
      <div className="
        flex flex-col gap-4
        md:flex-row md:items-end md:justify-between md:flex-wrap
      ">
        {/* Left – filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-3">
          <FilterDropdown label="Category"    options={CATEGORY_OPTIONS} value={category}   onChange={setCategory}   />
          <FilterDropdown label="Price Range" options={PRICE_OPTIONS}    value={priceRange} onChange={setPriceRange} />
          <FilterDropdown label="Material"    options={MATERIAL_OPTIONS} value={material}   onChange={setMaterial}   />
        </div>

        {/* Right – sort */}
        <FilterDropdown label="Sort by" options={SORT_OPTIONS} value={sort} onChange={setSort} />
      </div>
    </section>
  );
}