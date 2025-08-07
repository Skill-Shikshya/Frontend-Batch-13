import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.file) {
    return Response.json(
      {
        message: "file converted successfully",
      },
      { status: 200 }
    );
  }

  return Response.json({ message: "no file found" }, { status: 400 });
}
