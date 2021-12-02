import react from "react";
import "./App.css";
import Fetchapi from "./Fetchapi";
import Contact from "./Contact";
import About from "./About";
import TermAndCondition from "./TermAndCondition";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <>
      {/* <Fetchapi /> */}
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Fetchapi />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
      <TermAndCondition />
      {/* <Router>
        <Routes>
          <Route path="/TermAndCondition" element={<TermAndCondition />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
