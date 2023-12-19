"use client";

import { useUser } from "@supabase/auth-helpers-react";
import axios from "axios";
import FriendsList from "./FriendsList";

const TextSend = () => {
  const user = useUser();

  const handleSend = async (e: any) => {
    e.preventDefault();
    const text = e.target[0].value;
    if (text) {
      try {
        const res = await axios.post("/api/message/send", { text });
        console.log(res.data.ok);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      {user ? (
        <form
          className="flex flex-col gap-2 justify-center items-center  mt-2"
          onSubmit={handleSend}>
          <FriendsList />
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
