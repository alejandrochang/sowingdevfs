import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select('_id');
    return NextResponse.json({ user }, { status: 201 });
  } catch(e) {
    console.log(`Eror: ${e}`);
  }
}