// CalendarComponent.js
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Calendario = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (value) => {
    if (value instanceof Date) {
      setDate(value);
    } else if (Array.isArray(value) && value.length > 0) {
      // Manejar rango de fechas
      console.log("Rango de fechas:", value);
      // Puedes hacer algo con el rango de fechas aquí si es necesario
    }
  };

  return (
    <div>
      <h2>Calendario</h2>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};
