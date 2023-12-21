"use client";

import AuthContent from "@/components/AuthContent";
import KakaoAuth from "@/components/KakaoAuth";
import SendMe from "@/components/SendMe";
import TextSend from "@/components/TextSend";

export default function Home() {
  return (
    <main className="h-full">
      <div className="font-semibold h-full flex flex-col items-center justify-center">
        {/* <AuthContent />*/}
        {/* <TextSend /> */}
        <KakaoAuth />
        <SendMe />
      </div>
    </main>
  );
}
