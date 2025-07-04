import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import "./RoomList.css";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(
      "https://headlessdemo3.wpenginepowered.com/wp-json/wp/v2/room?acf_format=standard"
    )
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <div className="room-list">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
