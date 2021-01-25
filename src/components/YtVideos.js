import React, { useContext } from "react";
import ReactPlayer from "react-player";
import StyleContext from "../contexts/StyleContext";
import "../styles/YtVideos.css";

function YtVideos() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={isDark ? "yt-container dark-yt-container" : "yt-container"}
      id="videos"
    >
      <h1>Learn More About Tezos</h1>
      <div className="yt-align-videos">
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=16-FsTu3qF0"
            className="player-alignment"
          />
        </div>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ce2_IMxdpIY"
            className="player-alignment"
          />
        </div>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Q9fCL-9exnw"
            className="player-alignment"
          />
        </div>
      </div>
    </div>
  );
}

export default YtVideos;
