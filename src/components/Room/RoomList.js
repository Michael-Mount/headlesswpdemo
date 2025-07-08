import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import "./RoomList.css";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(
      "https://headlessdemo3.wpenginepowered.com/wp-json/wp/v2/room?acf_format=standard&per_page=100&_=${Date.now()}"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched rooms:", data);
        setRooms(data);
      });
  }, []);

  return (
    <div className="room-list">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
