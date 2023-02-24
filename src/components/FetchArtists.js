import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchArtists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/artists?page=1&limit=60")
      .then((res) => {
        console.log(res);
        setArtists(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="artistsList">
      <ul>
        {artists.map((artist) => (
          <li key={artist.id} className="artistIndex">
            <img src={artist.photo} className="artists_photo" alt="artists"></img>
            <h4>{artist.name}</h4><br></br>
            <p className="artists_description">{artist.description}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchArtists;
