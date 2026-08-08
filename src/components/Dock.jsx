import "./dock.scss";

const Dock = ({ setWindowState }) => {
  const handleClick = (windowName) => {
    setWindowState((state) => ({
      ...state,
      [windowName]: true,
    }));
  };

  return (
    <footer className="dock">
      <div className="icon github" onClick={() => handleClick("github")}>
        <img src="/doc-icons/github.svg" alt="github" />
      </div>

      <div className="icon note" onClick={() => handleClick("note")}>
        <img src="/doc-icons/note.svg" alt="note" />
      </div>

      <div className="icon pdf" onClick={() => handleClick("resume")}>
        <img src="/doc-icons/pdf.svg" alt="pdf" />
      </div>

      <div
        className="icon calender"
        onClick={() => {
          handleClick("calendar");
        }}
      >
        <img src="/doc-icons/calender.svg" alt="calender" />
      </div>

      <div className="icon spotify" onClick={() => handleClick("spotify")}>
        <img src="/doc-icons/spotify.svg" alt="spotify" />
      </div>

      <div
        className="icon mail"
        onClick={() => {
          window.open("mailto:ankitdhilpe123@gmail.com", "_blank");
        }}
      >
        <img src="/doc-icons/mail.svg" alt="mail" />
      </div>

      <div
        className="icon link"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/ankit-dhilpe-841a43183/",
            "_blank",
          );
        }}
      >
        <img src="/doc-icons/link.svg" alt="link" />
      </div>

      <div className="icon cli" onClick={() => handleClick("cli")}>
        <img src="/doc-icons/cli.svg" alt="cli" />
      </div>
    </footer>
  );
};

export default Dock;
