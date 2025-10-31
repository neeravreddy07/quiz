import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ ok: true, message: "quiz create stub" }, { status: 200 });
}
