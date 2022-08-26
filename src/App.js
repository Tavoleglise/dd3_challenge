import { createContext, useState, useEffect } from "react";
import "./global_styles.scss";
import "./theme.scss";
import Home from "./pages/Home";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

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
        <div className="footer"></div>
      </div>
    </ThemeContext.Provider>
  );
}
