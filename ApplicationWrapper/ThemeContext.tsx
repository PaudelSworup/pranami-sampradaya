import { createContext } from "react";
import { light_dark } from "@/interfaces/interface";
const ThemeContext = createContext<light_dark>({
  darkmode: false,
  toggleMode: () => {},
});

export default ThemeContext;
