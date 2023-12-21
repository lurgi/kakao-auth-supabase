"use client";

const KakaoAuthButton = () => {
  const user = window.localStorage.getItem("userData");
  console.log(user);

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
