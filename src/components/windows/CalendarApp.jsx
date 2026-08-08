import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import MacWindow from "./MacWindow";
import moment from "moment";
import EventPopup from "../EventPopup";
import "./calendarapp.scss";

const CalendarApp = ({ onClose }) => {
  const initialEvents = [
    {
      id: 1,
      title: "Meeting with John",
      start: new Date(moment().add(1, "days").set({ hour: 10, minute: 0 })),
      end: new Date(moment().add(1, "days").set({ hour: 11, minute: 0 })),
    },
    {
      id: 2,
      title: "Lunch with Sarah",
      start: new Date(
        moment().subtract(20, "days").set({ hour: 12, minute: 0 }),
      ),
      end: new Date(moment().subtract(20, "days").set({ hour: 13, minute: 0 })),
    },
    {
      id: 3,
      title: "Project Deadline",
      start: new Date(moment().subtract(3, "days").startOf("day")),
      end: new Date(moment().subtract(3, "days").endOf("day")),
    },
    {
      id: 4,
      title: "Workshop",
      start: new Date(
        moment().subtract(10, "days").set({ hour: 9, minute: 0 }),
      ),
      end: new Date(moment().subtract(10, "days").set({ hour: 17, minute: 0 })),
    },
    {
      id: 5,
      title: "Team Standup",
      start: new Date(
        moment().subtract(15, "days").set({ hour: 9, minute: 30 }),
      ),
      end: new Date(moment().subtract(15, "days").set({ hour: 10, minute: 0 })),
    },
  ];

  const localizer = momentLocalizer(moment);
  
  // Load events from localStorage or use initial events
  const [events, setEvents] = useState(() => {
    try {
      const storedEvents = localStorage.getItem("calendarEvents");
      if (storedEvents) {
        const parsedEvents = JSON.parse(storedEvents);
        // Convert date strings back to Date objects
        return parsedEvents.map(event => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end)
        }));
      }
    } catch (error) {
      console.error("Error loading events from localStorage:", error);
    }
    return initialEvents;
  });
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpenEvent, setIsOpenEvent] = useState(null);

  // Save events to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("calendarEvents", JSON.stringify(events));
    } catch (error) {
      console.error("Error saving events to localStorage:", error);
    }
  }, [events]);

  const handleSelectSlot = (slotInfo) => {
    console.log(slotInfo);
    setSelectedDate(slotInfo.start);
    setSelectedEvent(null);
    setIsOpenEvent(true);
  };

  const handleSelectEvent = (event) => {
    console.log(event);
    setSelectedDate(null);
    setSelectedEvent(event);
    setIsOpenEvent(true);
  };

  const handleSaveEvent = (eventData) => {
    if (eventData.id) {
      // Editing existing
      setEvents((prev) =>
        prev.map((ev) => (ev.id === eventData.id ? eventData : ev)),
      );
    } else {
      // Adding new
      const newEvent = {
        ...eventData,
        id: events.length + 1,
      };
      setEvents((prev) => [...prev, newEvent]);
    }
    setIsOpenEvent(false);
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  const handleDropEvent = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
    setSelectedEvent(null);
    setIsOpenEvent(false);
  };



  return (
    <MacWindow onClose={onClose}>
      <div className="calendar">
        <Calendar
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          localizer={localizer}
          startAccessor="start"
          events={events}
          endAccessor="end"
          style={{ width: "59vw", height: "61vh" }}
        />

        {isOpenEvent && (
          <EventPopup
            isOpen={isOpenEvent}
            onClose={() => setIsOpenEvent(false)}
            onSave={handleSaveEvent}
            onDelete={handleDropEvent}
            date={selectedDate}
            event={selectedEvent}
          />
        )}
      </div>
    </MacWindow>
  );
};

export default CalendarApp;
