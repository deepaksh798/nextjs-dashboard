import { create } from "zustand";

type ThemeState = {
  theme: string;
  setTheme: (theme: string) => void;
  initTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "nord",

  setTheme: (theme: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
    set({ theme });
  },

  initTheme: () => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") || "cupcake";
    document.documentElement.setAttribute("data-theme", savedTheme);
    set({ theme: savedTheme });
  },
}));
