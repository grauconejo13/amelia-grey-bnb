import { useParams } from "react-router-dom";
import { useState } from "react";
import { rooms } from "../data/rooms";

import RoomGallery from "../components/RoomGallery";
import BookingModal from "../components/BookingModal";

function RoomDetail() {
  const { id } = useParams();
  const room = rooms.find(r => r.id === Number(id));

  if (!room) {
    return (
      <div className="container py-5">
        <h2>Room not found</h2>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(room.gallery[0]);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <main className="container py-5">
      <h1 className="mb-4">{room.name}</h1>

      <div className="row g-5">
        {/* LEFT — thumbnails */}
        <div className="col-lg-4">
          <RoomGallery
            images={room.gallery}
            onSelect={setSelectedImage}
            selected={selectedImage}
          />
        </div>

        {/* RIGHT — preview + info */}
        <div className="col-lg-8">
          {/* Preview */}
          <div className="preview-frame mb-4">
            <img
              src={selectedImage}
              alt="Selected room"
              className="preview-image"
            />
          </div>

          {/* Description */}
          <h4>About this room</h4>
          <p>{room.description}</p>

          <button
            className="btn btn-outline-secondary mt-3"
            onClick={() => setShowBooking(true)}
          >
            Book Now
          </button>
        </div>
      </div>

      <BookingModal
        show={showBooking}
        onHide={() => setShowBooking(false)}
        rate={room.rate}
      />
    </main>
  );
}

export default RoomDetail;
