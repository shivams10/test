import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import { useThemeHook } from "./contexts/ThemeContext.jsx";

function App() {
  const [theme] = useThemeHook();

  return (
    <main
      className={`${theme ? "theme-black" : "theme-light-page"} main-container`}
    >
      <Header />
    </main>
  );
}

export default App;
