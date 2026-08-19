import InfoAmenities from "./InfoAmenities";
import Gallery from "../components/Gallery";

function InfoPage() {
  return <main className="info-page"><section className="info-header section-compact"><div className="container"><p className="eyebrow">Plan your stay</p><h1>Everything in its place.</h1><p className="mb-0 col-lg-7">A simple guide to arriving, settling in, and making the most of your time at Amelia Grey.</p></div></section><InfoAmenities /><Gallery /></main>;
}

export default InfoPage;
