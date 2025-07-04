import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RoomDetail() {
  const { slug } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch(
      `https://headlessdemo3.wpenginepowered.com/wp-json/wp/v2/room?slug=${slug}&acf_format=standard`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setRoom(data[0]);
      });
  }, [slug]);

  return (
    <>
      {!room ? (
        <p>Loading...</p>
      ) : (
        <div className="room-detail">
          <h1>{room.title.rendered}</h1>
          <img src={room.acf?.preview_image} alt={room.title.rendered} />
          <p>{room.acf?.full_description}</p>
        </div>
      )}
    </>
  );
}
