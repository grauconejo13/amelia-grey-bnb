import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/rooms" element={<Rooms />} />
         <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<main className="container py-5"><h1>Page not found</h1></main>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
