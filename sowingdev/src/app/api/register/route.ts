import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { email, password, name } = await req.json();

    console.log('plop success:', { email, password, name });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured while registering user." } , { status: 500 });
  }
}