import { useState } from "react";

function RoomGallery({ images }) {
  const [active, setActive] = useState(images[0]);

  return (
    <>
      <img
        src={active}
        alt="Room"
        className="img-fluid rounded mb-4"
      />

      <div className="row g-2">
        {images.map(src => (
          <div className="col-4 col-md-3" key={src}>
            <img
              src={src}
              alt="Thumbnail"
              className="img-fluid rounded"
              style={{ cursor: "pointer" }}
              onClick={() => setActive(src)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default RoomGallery;
