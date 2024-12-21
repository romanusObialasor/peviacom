import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/LandingPage/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductPage from "./components/ProductPage/ProductPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productPage" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
