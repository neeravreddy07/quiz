import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ ok: true, message: "generate-quiz stub" }, { status: 200 });
}
