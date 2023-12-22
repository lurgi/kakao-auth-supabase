"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "react-query";

import useUser from "@/hooks/useUser";

import { IKakaoUser } from "@/types/kakao";

interface IUserResponse {
  ok: boolean;
  accessToken: string;
  refreshToken: string;
}

const KakaoAuth = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  // 1. 로그인 정보로 토큰을 가져온다.
  // 2. zustand에 토큰을 저장한다.
  // 3. 로컬 스토리지에 토큰을 저장한다.
  // 4. 홈으로 이동한다.
  const userToken = async (code: string) => {
    return await (
      await fetch("/api/kakao/user/token", {
        method: "POST",
        body: JSON.stringify({
          code,
        }),
      })
    ).json();
  };

  const { setAccessToken, setRefreshToken, setIsLoading } = useUser(
    (state) => state
  );
  const { data: tokenData, isLoading: isTokenLoading } =
    useQuery<IUserResponse>("user", () => userToken(searchParams.code));
  const router = useRouter();

  useEffect(() => {
    if (tokenData?.ok) {
      setIsLoading(true);

      setAccessToken(tokenData.accessToken);
      setRefreshToken(tokenData.refreshToken);
      window.localStorage.setItem(
        "token",
        JSON.stringify({
          accessToken: tokenData.accessToken,
          refreshToken: tokenData.refreshToken,
        })
      );
      setIsLoading(false);
      router.push("/");
    }
  }, [tokenData, setAccessToken, setRefreshToken, setIsLoading]);

  return <div>로그인 중입니다...</div>;
};

export default KakaoAuth;
