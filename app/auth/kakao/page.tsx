import axios from "axios";

const KakaoAuth = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const grant_type = "authorization_code";
  const client_id = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!;
  const redirect_uri = "http://localhost:3000/auth/kakao";
  const code = searchParams.code;
  const client_secret = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!;

  try {
    const res = await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}&client_secret=${client_secret}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    const json = await res.json();
    console.log(json);
  } catch (error: any) {
    console.log("post 실패", error.message);
  }
  return <div>hi</div>;
};

export default KakaoAuth;
