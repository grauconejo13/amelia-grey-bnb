import Gallery from "../components/Gallery";
import InfoAmenities from "./InfoAmenities";

function InfoPage() {
  return (
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
  );
}

export default InfoPage;
