import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import InfoAmenities from "./pages/InfoAmenities";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-5">
            <Gallery />
          </div>
          <div className="col-lg-7">
            <InfoAmenities />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
