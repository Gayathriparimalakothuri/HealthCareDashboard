import React from 'react';
// import './CalendarUI.css';
import mockCalendar from '../data/CalendarData';
const CalendarUI = () => {
  

  return (
    <div className="calendar-container">
      <div className="header">
        <h6>{mockCalendar.month}</h6>
        <div className="nav-icons">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-grid">
        {mockCalendar.days.map((day, index) => (
          <div key={index} className="day-label">{day}</div>
        ))}

        {mockCalendar.dates.map((date, index) => (
          <div
            key={index}
            className={`date-label ${date === '26' ? 'active-day' : ''}`}
          >
            {date}
          </div>
        ))}

        {mockCalendar.days.map((day, index) => (
          <div key={index} className="slot-column">
            {mockCalendar.slots[day].map((time, i) => (
              <div
                key={i}
                className={`time-slot ${
                  mockCalendar.highlightedSlots.includes(time)
                    ? 'highlight'
                    : ''
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarUI;
