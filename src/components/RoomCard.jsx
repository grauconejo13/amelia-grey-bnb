import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={room.image}
        alt={room.name}
        className="card-img-top"
        style={{ height: "260px", objectFit: "cover" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title">{room.name}</h5>
        <p className="text-muted">
          Standard Rate: ${room.rate} / night
        </p>

        {/* THIS is the important part */}
        <Link to={`/rooms/${room.id}`} className="btn btn-outline-secondary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
