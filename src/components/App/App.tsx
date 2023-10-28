import "./App.css";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, TouchEvent } from "react";

import { AnimatePresence } from "framer-motion";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import SwipeHint from "../SwipeHint/SwipeHint";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwipeHintVisible, setIsSwipeHintVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSwipeHintVisible(true);
    }, 1600);
  }, []);

  const minSwipeDistance = 150;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (location.pathname === "/") {
        isLeftSwipe ? navigate("/skills") : navigate("/portfolio");
      } else if (location.pathname === "/skills") {
        isLeftSwipe ? navigate("/portfolio") : navigate("/");
      } else if (location.pathname === "/portfolio") {
        isLeftSwipe ? navigate("/") : navigate("/skills");
      }
    }
  };

  return (
    <div className="App">
      <div className="page" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} key={1} />
            <Route path="/skills" element={<Skills />} key={2} />
            <Route path="/portfolio" element={<Portfolio />} key={3} />
          </Routes>
        </AnimatePresence>
        {isSwipeHintVisible && <SwipeHint />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
