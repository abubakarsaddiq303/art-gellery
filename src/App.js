import react from "react";
import "./App.css";
import Fetchapi from "./Fetchapi";
import Contact from "./Contact";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
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
    </>
  );
}

export default App;
