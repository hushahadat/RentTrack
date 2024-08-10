
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const d = await request.json();

    const res = await fetch("http://localhost:3022/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(d),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "An error occurred" },
      { status: 500 }
    );
  }
}
