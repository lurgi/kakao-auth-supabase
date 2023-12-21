"use client";

import { IKakaoUser } from "@/types/kakao";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { QueryClient, useQuery } from "react-query";

interface User extends IKakaoUser {
  accessToken: string;
  refreshToken: string;
}

interface IUserResponse {
  ok: boolean;
  user: User;
}

const KakaoAuth = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const userFetcher = async (code: string) => {
    return await (
      await fetch("/api/user/me", {
        method: "POST",
        body: JSON.stringify({
          code,
        }),
      })
    ).json();
  };

  const { data, isLoading } = useQuery<IUserResponse>("user", () =>
    userFetcher(searchParams.code)
  );

  const router = useRouter();

  useEffect(() => {
    if (data?.ok) {
      window.localStorage.setItem(
        "userData",
        JSON.stringify({
          accessToken: data.user.accessToken,
          refreshToken: data.user.refreshToken,
        })
      );
      router.push("/");
    }
  }, [data, isLoading, router]);

  return <div>로그인 중입니다...</div>;
};

export default KakaoAuth;
