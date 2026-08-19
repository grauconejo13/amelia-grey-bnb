import { galleryImages } from "../data/gallery";

function Gallery() {
  return (
    <section className="gallery-panel h-100 w-100">
      <p className="section-kicker text-white-50 mb-2">The inn</p>
      <h2 className="mb-3">Photo Gallery</h2>

      <div className="row g-3 gallery-grid">
        {galleryImages.map(src => (
          <div className="col-lg-4 col-md-6" key={src}>
            <img
              src={src}
              alt="Gallery"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
