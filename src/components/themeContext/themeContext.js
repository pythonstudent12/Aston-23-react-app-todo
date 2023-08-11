import { createContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#293133",
    background: "#222222",
  },
};

export const TodoContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
