import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/rooms" element={<Rooms />} />
         <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
