"use client";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoAuthButton = () => {
  // 1. zustand에 유저 토큰 있는지 확인.
  // 2. 로컬 스토리지에 유저 토큰 있는지 확인.
  // 3. 로그아웃 상태

  const handleAuth = async () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/auth/kakao",
    });
  };

  return (
    <button
      className="border border-neutral-400 rounded-lg px-4 py-1 hover:bg-neutral-100 hover:border-neutral-500 transition"
      onClick={() => handleAuth()}>
      로그인
    </button>
  );
};

export default KakaoAuthButton;
