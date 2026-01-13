import { useState } from "react";

function RoomGallery({ images, onSelect }) {
  return (
    <div className="row g-3">
      {images.map((img, index) => (
        <div className="col-6 col-md-4" key={index}>
          <img
            src={img}
            alt={`Room image ${index + 1}`}
            className="img-fluid rounded shadow-sm"
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(img)}
          />
        </div>
      ))}
    </div>
  );
}

export default RoomGallery;
