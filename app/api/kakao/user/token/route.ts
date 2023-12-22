import { NextResponse } from "next/server";
import { IKakaoToken, IKakaoUser } from "@/types/kakao";

export const POST = async (res: Response) => {
  const json = await res.json();

  const grant_type = "authorization_code";
  const client_id = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!;
  const redirect_uri = "http://localhost:3000/auth/kakao";
  const code = json.code;
  const client_secret = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!;

  if (!code) return new NextResponse("Unauthorized", { status: 401 });

  try {
    // 카카오 서버에서 토큰 가져오기
    const tokenData: IKakaoToken = await (
      await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}&client_secret=${client_secret}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
    ).json();

    return NextResponse.json({
      ok: true,
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
    });
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse("Internal error", { status: 500 });
  }
};
