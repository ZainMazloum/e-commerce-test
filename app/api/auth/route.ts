import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = data;

    if (!email || !email.includes("@") || !password || password.trim().length < 7) {
      return NextResponse.json(
        { message: "Invalid input - password should be at least 7 characters long and email should be valid." },
        { status: 422 }
      );
    }

    const db = await connectDB(); // already a Db, use directly

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User exists already!" },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await db.collection("users").insertOne({ email, password: hashedPassword });

    return NextResponse.json(
      { message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("[AUTH_REGISTER_ERROR]:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}