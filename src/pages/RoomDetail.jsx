import { useParams } from "react-router-dom";
import { useState } from "react";
import { rooms } from "../data/rooms";

import RoomGallery from "../components/RoomGallery";
import BookingModal from "../components/BookingModal";

function RoomDetail() {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);

  const room = rooms.find(r => r.id === Number(id));

  if (!room) {
    return (
      <div className="container py-5">
        <h2>Room not found</h2>
      </div>
    );
  }

  return (
    <>
      <section className="container py-5">
        <h1 className="mb-4">{room.name}</h1>

        <div className="row g-5">
          {/* LEFT */}
          <div className="col-lg-7">
            <RoomGallery images={room.gallery} />

            <div className="mt-4">
              <h4>About this room</h4>
              <p>{room.description}</p>
            </div>

            {/* Book Now trigger */}
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={() => setShowBooking(true)}
            >
              Book Now
            </button>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5">
            {/* intentionally empty or could hold highlights later */}
          </div>
        </div>
      </section>

      {/* Booking modal */}
      <BookingModal
        show={showBooking}
        onHide={() => setShowBooking(false)}
        rate={room.rate}
      />
    </>
  );
}

export default RoomDetail;
