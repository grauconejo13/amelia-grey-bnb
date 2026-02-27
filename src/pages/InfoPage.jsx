import Gallery from "../components/Gallery";
import InfoAmenities from "./InfoAmenities";

function InfoPage() {
  return (
    <main className="container-fluid p-0">
      <div className="row g-0 align-items-stretch info-row">
        <div className="col-lg-6 d-flex">
          <Gallery />
        </div>

        <div className="col-lg-6 d-flex">
          <InfoAmenities />
        </div>
      </div>
    </main>
  );
}

export default InfoPage;
