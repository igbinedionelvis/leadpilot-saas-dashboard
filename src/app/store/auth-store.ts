import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  userName: string;
  signIn: () => void;
  signOut: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: true,
  userName: "Elvis Igbinedion",
  signIn: () => set({ isAuthenticated: true }),
  signOut: () => set({ isAuthenticated: false }),
}));
