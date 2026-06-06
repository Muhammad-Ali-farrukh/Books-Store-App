import { connectMonogdb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
export async function POST(req){
  try {
    const { email } = await req.json();      
    await connectMonogdb();              
    const user = await User.findOne({ email }); 
    return NextResponse.json({ user },{status:200});      
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}