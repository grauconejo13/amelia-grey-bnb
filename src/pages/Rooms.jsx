import { rooms } from "../data/rooms";
import RoomCard from "../components/RoomCard";

function Rooms() {
  return (
    <main className="container-fluid py-5">
      {/* CONTENT WIDTH CONTROL */}
      <div className="container">
        <h1 className="text-center mb-5">Our Rooms</h1>

        <div className="row g-4 justify-content-center">
          {rooms.map((room) => (
            <div className="col-lg-4 col-md-6" key={room.id}>
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Rooms;
