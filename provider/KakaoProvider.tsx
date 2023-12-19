"use client";
import Script from "next/script";

declare global {
  interface Window {
    Kakao: any;
  }
}

interface KakaoProviderProps {
  children: React.ReactNode;
}

const KakaoProvider: React.FC<KakaoProviderProps> = ({ children }) => {
  function KakaoInit() {
    // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해야 합니다.
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    // SDK 초기화 여부를 판단합니다.
    console.log(window.Kakao.isInitialized());
  }

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_VALUE}
        crossOrigin="anonymous"
        onLoad={KakaoInit}
      />
      {children}
    </>
  );
};

export default KakaoProvider;
