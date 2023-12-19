import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const res = await req.json();
  console.log(res.text);
  // TODO 단일 카카오 메세지 보내기.
  return NextResponse.json({ ok: true });
};
