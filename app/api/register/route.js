import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectMongodb();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({name,email,password: hashedPassword,});
    return NextResponse.json(
      
      { 
        message: "User registered successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
