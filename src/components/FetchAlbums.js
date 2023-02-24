import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/albums?page=1&limit=75")
      .then((res) => {
        console.log(res);
        setAlbums(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="albumsList">
      <ul>
        {albums.map((album) => (
          <li key={album.artist_id} className="albumIndex">
            <img src={album.cover_small} className="albums_photo" alt="albums"></img>
            <h4>{album.name}</h4><br></br>
            <p className="albums_description">{album.description}</p>
            <p className="albums_popularity">Popularity : {album.popularity}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchAlbums;
