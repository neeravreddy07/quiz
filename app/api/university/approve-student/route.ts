import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ ok: true, message: "approve-student stub" }, { status: 200 });
}
