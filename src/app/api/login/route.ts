import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const base_url = process.env.BASE_URl;
  try {
    const d = await request.json();

    const res = await fetch(`${base_url}auth/signin`, {
      method: "POST",
      body: JSON.stringify(d),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    return NextResponse.json(response);
  } catch (error) {
    console.log("================error====================");
    console.log(error);
    return NextResponse.json(
      { status: "failed", message: "An error occurred" },
    );
  }
}
