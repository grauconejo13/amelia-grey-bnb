import { galleryImages } from "../data/gallery";

function Gallery() {
  return (
    <section
      className="p-4 text-center"
      style={{ background: "#708090", color: "white" }}
    >
      <h2 className="mb-4">Photo Gallery</h2>

      <div className="row g-4">
        {galleryImages.map(src => (
          <div className="col-lg-4 col-md-6" key={src}>
            <img
              src={src}
              alt="Gallery"
              className="img-fluid rounded shadow-sm"
              style={{ height: "260px", objectFit: "cover", width: "100%" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
