import { useState, useEffect } from "react";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const weekday = now
        .toLocaleDateString("en-US", { weekday: "short" })
        .toLowerCase();
      const monthDay = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const timeString = now
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase()
        .replace(" ", "");
      setCurrentTime(`${weekday} ${monthDay} ${timeString}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return <div>{currentTime}</div>;
};

export default DateTime;
