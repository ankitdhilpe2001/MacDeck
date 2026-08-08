import { useEffect, useState } from "react";

// Helper function to format date for datetime-local input
const formatDateForInput = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const EventPopup = ({ isOpen, onClose, onDelete, onSave, date, event }) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (event) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(event.title || "");
      setStart(formatDateForInput(event.start));
      setEnd(formatDateForInput(event.end));
    } else if (date) {
      const defaultStart = new Date(date);
      const defaultEnd = new Date(defaultStart.getTime() + 60 * 60 * 1000); // 1 hour later
      setStart(formatDateForInput(defaultStart));
      setEnd(formatDateForInput(defaultEnd));
      setTitle("");
    }
  }, [date, event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: event?.id,
      title,
      start: new Date(start),
      end: new Date(end),
    });
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 34,
        width: "62vw",
        height: "67vh",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "10",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
        }}
      >
        <h2>{event ? "Edit Event" : "Add Event"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ width: "90%", padding: "8px", marginBottom: "10px" }}
            />
          </div>
          <div>
            <label>Start:</label>
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
              style={{ width: "90%", padding: "8px", marginBottom: "10px" }}
            />
          </div>
          <div>
            <label>End:</label>
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              required
              style={{ width: "90%", padding: "8px", marginBottom: "10px" }}
            />
          </div>
          <button
            type="submit"
            style={{ marginRight: "10px", marginTop: "15px" }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{ marginRight: "10px", marginTop: "15px" }}
          >
            Cancel
          </button>

          {event && (
            <button
              type="button"
              onClick={() => onDelete(event.id)}
              style={{
                marginRight: "10px",
                marginTop: "15px",
                backgroundColor: "#ff6b6b",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EventPopup;
