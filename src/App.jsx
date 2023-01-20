import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { useThemeHook } from "./contexts/ThemeContext.jsx";
import Header from "./components/header";
import Home from "./pages/home";
import Cart from "./pages/cart"

function App() {
  const [theme] = useThemeHook();

  return (
    <main
      className={`${theme ? "theme-black" : "theme-light-page"} main-container`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
}

export default App;
