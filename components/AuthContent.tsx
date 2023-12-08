"use client";

import { useRouter } from "next/navigation";

const AuthContent = () => {
  const router = useRouter();
  return (
    <div className="font-semibold h-full flex items-center justify-center">
      <div className="grid grid-cols-2">
        <button
          className="col-span-2 border border-neutral-400 rounded-lg px-4 py-1 hover:bg-neutral-100 hover:border-neutral-500 transition"
          onClick={() => router.push("/auth")}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default AuthContent;
