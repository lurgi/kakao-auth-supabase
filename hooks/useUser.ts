import { IKakaoUser } from "@/types/kakao";
import { create } from "zustand";

interface IuseUserStore {
  accessToken?: string;
  refreshToken?: string;
  user?: IKakaoUser;
  isLoading: boolean;
  setAccessToken: (value: string) => void;
  setRefreshToken: (value: string) => void;
  setUser: (value: IKakaoUser) => void;
  setIsLoading: (value: boolean) => void;
}

const useUser = create<IuseUserStore>((set, get) => ({
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
  isLoading: false,
  setAccessToken: (accessToken) =>
    set((state) => ({
      accessToken,
    })),
  setRefreshToken: (refreshToken) =>
    set((state) => ({
      refreshToken,
    })),
  setUser: (user) =>
    set((state) => ({
      user,
    })),
  setIsLoading: (boolean) =>
    set((state) => ({
      isLoading: boolean,
    })),
}));

export default useUser;
