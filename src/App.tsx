import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Events from "./pages/Events";

// import snowfall
import Snowfall from "react-snowfall";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";

function App() {
  return (
    <>
      {/* Global Snowfall Effect */}
      <Snowfall 
        snowflakeCount={120}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999, 
          pointerEvents: "none", // important: allows clicking through
        }}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About/>} />
         <Route path="/gallery" element={<Gallery/>} />
         <Route path="/services" element={<Services/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

