import MacWindow from "./MacWindow";
import "./spotify.scss"

const Spotify = ({onClose}) => {
  return (
    <MacWindow onClose={onClose}>
     <div className="spotify-window">
        <iframe
        data-testid="embed-iframe"
        style={{borderRadius:0}}
        src="https://open.spotify.com/embed/artist/4YRxDV8wJFPHPTeXepOstw?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
        </iframe>
     </div>
    </MacWindow>
  );
};

export default Spotify;
