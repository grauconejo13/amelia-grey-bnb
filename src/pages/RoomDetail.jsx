import { useParams } from "react-router-dom";
import { useState } from "react";
import { rooms } from "../data/rooms";

import RoomGallery from "../components/RoomGallery";
import BookingModal from "../components/BookingModal";

function RoomDetail() {
  const { id } = useParams();
  const room = rooms.find(r => r.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(room?.gallery[0] ?? null);
  const [showBooking, setShowBooking] = useState(false);

  if (!room) {
    return (
      <div className="container page-shell">
        <h2>Room not found</h2>
      </div>
    );
  }

  return (
    <main className="container page-shell room-detail-page">
      <p className="section-kicker mb-2">Your stay</p>
      <h1 className="mb-3">{room.name}</h1>

      <div className="row g-4">
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
          <div className="detail-copy">
            <p className="eyebrow">Room details</p>
            <h4>About this room</h4>
            <p>{room.description}</p>
            <p className="text-muted">Standard rate: ${room.rate} / night</p>
          </div>

          <button
            className="btn btn-outline-secondary booking-button"
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
