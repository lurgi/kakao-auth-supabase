"use client";

import useUser from "@/hooks/useUser";
import KakaoAuthButton from "./KakaoAuthBtn";
import Script from "next/script";

import { useEffect } from "react";
import { useQuery } from "react-query";
import { IKakaoUser } from "@/types/kakao";

interface IUserResponse {
  ok: boolean;
  user: IKakaoUser;
}

const KakaoAuth = () => {
  const { accessToken, refreshToken, user, setUser } = useUser(
    (state) => state
  );
  console.log(accessToken, refreshToken);
  const userFetcher = async () => {
    if (user) {
      return;
    }
    return await (
      await fetch("/api/kakao/user/me", {
        method: "POST",
        body: JSON.stringify({
          accessToken,
          refreshToken,
        }),
      })
    ).json();
  };
  const { data, isLoading, error } = useQuery<IUserResponse>(
    "user",
    userFetcher
  );

  useEffect(() => {
    if (data?.ok && data.user && !isLoading) {
      // setUser(data.user);
      console.log(data);
      console.log(data.user);
    }
    if (error) {
      console.log(error);
    }
  }, [data, isLoading, setUser, user, error]);

  return (
    <div>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_VALUE}
        crossOrigin="anonymous"
        onLoad={() =>
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY)
        }
      />
      <div>안녕하세요</div>
      <KakaoAuthButton />
    </div>
  );
};

export default KakaoAuth;
