import { createContext, useState } from "react";
import "./global_styles.scss";
import "./theme.scss";
import Home from "./pages/Home";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <div className="header">
          <img className="logo" src="./static/images/logo.png" alt="" />{" "}
          <img
            className="theme_selector"
            src={
              theme === "light"
                ? "./static/images/day.png"
                : "./static/images/night.png"
            }
            alt=""
            onClick={toggleTheme}
          />
        </div>

        <Home />
      </div>
    </ThemeContext.Provider>
  );
}
