import { rooms } from "../data/rooms";
import RoomCard from "../components/RoomCard";

function Rooms() {
  return (
    <section className="container py-5">
      <h1 className="text-center mb-5">Our Rooms</h1>

      <div className="row g-4">
        {rooms.map(room => (
          <div className="col-lg-4 col-md-6" key={room.id}>
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
