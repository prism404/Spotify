import React, { useState, useEffect } from "react";
import axios from "axios";

function Genres() {

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/genres?page=1&limit=20%22")
      .then((res) => {
        console.log(res);
        setGenres(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="GenresList">
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} className="genreIndex">{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;