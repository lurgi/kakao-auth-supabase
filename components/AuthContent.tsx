"use client";

import { useRouter } from "next/navigation";

const AuthContent = () => {
  const router = useRouter();
  return (
    <div className="font-semibold h-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => router.push("/sign-in")}>로그인</button>
        <button onClick={() => router.push("/sign-up")}>회원가입</button>
      </div>
    </div>
  );
};

export default AuthContent;
