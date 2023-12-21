"use client";

import { useUser } from "@supabase/auth-helpers-react";
import axios from "axios";

const TextSend = () => {
  const user = useUser();

  const handleSend = async (e: any) => {
    e.preventDefault();
    const text = e.target[0].value;
    if (text) {
      // window.Kakao.API.request({
      //   url: "/v2/api/talk/memo/default/send",
      //   data: {
      //     template_object: {
      //       object_type: "feed",
      //       content: {
      //         title: "딸기 치즈 케익",
      //         description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
      //         image_url:
      //           "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      //         link: {
      //           web_url: "https://developers.kakao.com",
      //           mobile_web_url: "https://developers.kakao.com",
      //         },
      //       },
      //       item_content: {
      //         profile_text: "Kakao",
      //         profile_image_url:
      //           "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      //         title_image_url:
      //           "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      //         title_image_text: "Cheese cake",
      //         title_image_category: "Cake",
      //         items: [
      //           {
      //             item: "Cake1",
      //             item_op: "1000원",
      //           },
      //           {
      //             item: "Cake2",
      //             item_op: "2000원",
      //           },
      //           {
      //             item: "Cake3",
      //             item_op: "3000원",
      //           },
      //           {
      //             item: "Cake4",
      //             item_op: "4000원",
      //           },
      //           {
      //             item: "Cake5",
      //             item_op: "5000원",
      //           },
      //         ],
      //         sum: "Total",
      //         sum_op: "15000원",
      //       },
      //       social: {
      //         like_count: 100,
      //         comment_count: 200,
      //       },
      //       buttons: [
      //         {
      //           title: "웹으로 보기",
      //           link: {
      //             mobile_web_url: "https://developers.kakao.com",
      //             web_url: "https://developers.kakao.com",
      //           },
      //         },
      //         {
      //           title: "앱으로 보기",
      //           link: {
      //             mobile_web_url: "https://developers.kakao.com",
      //             web_url: "https://developers.kakao.com",
      //           },
      //         },
      //       ],
      //     },
      //   },
      // })
      //   .then((response: any) => {
      //     console.log(response);
      //   })
      //   .catch((error: any) => {
      //     console.log(error);
      //   });
    }
  };

  return (
    <>
      {user ? (
        <form
          className="flex flex-col gap-2 justify-center items-center  mt-2"
          onSubmit={handleSend}>
          <input
            className="border py-1 px-3 rounded-lg"
            placeholder="입력하세요"
          />
          <button
            className="py-1 px-3 transition rounded-lg hover:bg-neutral-100 w-2/3 border-neutral-400 border"
            type="submit">
            메세지 보내기
          </button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextSend;
