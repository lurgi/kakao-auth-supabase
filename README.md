# Supabase 기본 사용법. 카카오 API, 토스 페이 기능 만들어보기.

## Supabase

1.  `<SupabaseProvider>`를 만들어서 감싸준다 (provider/SupabaseProvider.tsx)
2.  `const supabse = createClientComponentClient()` 클라이언트에서 사용
3.  `import { useUser } from "@supabase/auth-helpers-react"; ` 으로 useUser 사용 가능.
4.  `const { error } = await supabase.auth.signOut();` 로그아웃 가능,

## 카카오 로그인 구현

1. 로컬 스토리지에 토큰 확인
2. 토큰이 없으면
   - 로그아웃 상태로 페이지 오픈
3. 토큰이 있으면
   - 엑세스 토큰 있으면, 유저정보 가져오기.
   - 엑세스 토큰 없으면, 리프레시 토큰 갱신 가능할 시 엑세스토큰 가져오고 로컬 스토리지에 저장
   - react-query 'user'에 토큰으로 가져온 유저 데이터 저장 (react-query로 어디서든 가져올 수 있음. useUser 대용 가능)
4. 클라이언트 측에서 `window.Kakao.init()`을 먼저 실행한다. (provider/KakaoProvider.tsx)
5. 로그인 버튼은 ` window.Kakao.Auth.authorize({redirectUri});` 을 작동 시킨다.

## 카카오 친구 목록 불러오기

## 카카오 메세지 보내기

## 토스 페이먼츠 결제 구현
