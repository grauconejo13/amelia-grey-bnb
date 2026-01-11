
import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <img
        src={room.image}
        alt={room.name}
        className="card-img-top"
        style={{ height: "260px", objectFit: "cover" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title">{room.name}</h5>
        <p className="text-muted mb-3">
          Standard Rate: ${room.rate} / night
        </p>

        <Link to={room.link} className="btn btn-outline-secondary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
