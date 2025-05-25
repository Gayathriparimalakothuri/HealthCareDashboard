import React from 'react';
// import './CalendarUI.css';
import mockCalendar from '../data/CalendarData';
import CalendarUI from './Calender';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
const Schedule = () => {


    return (
        // <div className="calendar-container">
        //   <div className="header">
        //     <h6>{mockCalendar.month}</h6>
        //     <div className="nav-icons">
        //       <span>&lt;</span>
        //       <span>&gt;</span>
        //     </div>
        //   </div>

        //   <div className="calendar-grid">
        //     {mockCalendar.days.map((day, index) => (
        //       <div key={index} className="day-label">{day}</div>
        //     ))}

        //     {mockCalendar.dates.map((date, index) => (
        //       <div
        //         key={index}
        //         className={`date-label ${date === '26' ? 'active-day' : ''}`}
        //       >
        //         {date}
        //       </div>
        //     ))}

        //     {mockCalendar.days.map((day, index) => (
        //       <div key={index} className="slot-column">
        //         {mockCalendar.slots[day].map((time, i) => (
        //           <div
        //             key={i}
        //             className={`time-slot ${
        //               mockCalendar.highlightedSlots.includes(time)
        //                 ? 'highlight'
        //                 : ''
        //             }`}
        //           >
        //             {time}
        //           </div>
        //         ))}
        //       </div>
        //     ))}
        //   </div>
        // </div>
        <div className='card p-3 h-100'>
            <div className='d-flex justify-content-end align-items-center mb-4'>
                <button className='me-3' style={{ backgroundColor: 'transparent', borderColor: '#dee2e6', }} disabled>
                    <FontAwesomeIcon icon={faBell} style={{ color: 'blue' }} />
                </button>
                {/* <button className='ms-3' style={{ backgroundColor: 'transparent', borderColor: '#dee2e6', }} disabled> */}
                    <FontAwesomeIcon icon={faPlusSquare} style={{ color: '#330da1' }}  fontSize={'30px'}/>
                {/* </button> */}
                
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <CalendarUI />
                </div>
            </div>
        </div>
    );
};

export default Schedule;
