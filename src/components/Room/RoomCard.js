import { Link } from "react-router-dom";
import "./RoomCard.css";

import GreyButton from "../buttons/GreyButton/GreyButton";

export default function RoomCard({ room }) {
  return (
    <div className="room-card">
      <div className="room-image">
        <img src={room.acf?.preview_image} alt={room.title.rendered} />
      </div>

      <div className="room-content">
        <h4>{room.title.rendered}</h4>
        <p>{room.acf?.preview_text}</p>
        <Link to={`/rooms/${room.slug}`}>View Room Details</Link>
      </div>

      <div className="room-rate">
        <p>Rates from</p>
        <p className="price">${room.acf.room_price}</p>
        <GreyButton link="/" title="Book Now" />
      </div>
    </div>
  );
}
