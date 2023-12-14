import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('plop success:', { email, password, hashedPassword, name });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured while registering user." } , { status: 500 });
  }
}