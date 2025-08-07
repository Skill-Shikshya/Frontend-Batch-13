import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return Response.json({ message: "hi" }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  if (body.username === "asim" && body.password === "abc") {
    return Response.json(
      {
        message: "logged in successfully",
        token: "kjasbdjhagsfasfjgdkfacsthdytvce",
      },
      { status: 200 }
    );
  }

  return Response.json({ message: "login failed" }, { status: 400 });
}
