import { useUser } from "@supabase/auth-helpers-react";
import { NextResponse } from "next/server";

const GET = () => {
  const user = useUser();
  console.log(user);
  return NextResponse.json({ ok: true });
};
