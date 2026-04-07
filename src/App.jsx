import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PageTransition from "./components/PageTransition/PageTransition";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden text-[var(--ink)]">
      <ScrollProgress pathname={location.pathname} />

      <Navbar />

      <main className="relative z-10">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <PageTransition pathname={location.pathname}>
                <LandingPage />
              </PageTransition>
            }
          />
          <Route
            path="/products"
            element={
              <PageTransition pathname={location.pathname}>
                <Products />
              </PageTransition>
            }
          />
          <Route
            path="/aboutus"
            element={
              <PageTransition pathname={location.pathname}>
                <AboutUs />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition pathname={location.pathname}>
                <AboutUs />
              </PageTransition>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
