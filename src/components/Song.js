import React from "react";
import "../styles/song.css";

const Song = props => {
  const info = props.info;
  return (
    <div className="song">
      <img src={info.artworkUrl100} alt="no pict" />
      <span>
        <label>{info.trackName} </label>
        <hr />
        {info.artistName}
      </span>
    </div>
  );
};

export default Song;
