import React from "react";
import Song from "./Song";
import "../styles/content.css";

const Content = props => {
  let songs = props.songs.results;
  let resultMessage = "";
  let currentFirst = props.start;
  let currentLast = props.end;
  let turnOffButton = "hidden";
  if (songs) {
    turnOffButton = "visible";
    songs = songs.slice(currentFirst, currentLast);
    songs = songs.map(song => <Song key={song.trackId} info={song} />);

    if (props.songs.results.length > 0) {
      resultMessage = `Found ${props.songs.results.length} songs`;
      turnOffButton = "visible";
    } else {
      resultMessage = `Sorry, no matches found`;
      turnOffButton = "hidden";
    }
  }
  return (
    <div className="content">
      <p>{resultMessage}</p>
      <div className="results">{songs}</div>
      <button onClick={props.prev} style={{ visibility: turnOffButton }}>
        {`<< prev`}
      </button>
      <button
        onClick={props.next}
        style={{ visibility: turnOffButton }}
      >{`next >>`}</button>
    </div>
  );
};

export default Content;
