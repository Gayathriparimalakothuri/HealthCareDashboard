import React from 'react';
import CalendarUI from './Calender';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import userIcon from '../assets/adventurer.svg';
import appointments from '../data/AppoitmentData';
import upcomingSchedule from '../data/UpcomingSchedule';
const Schedule = () => {

    //Rendering the schedule component with calendar and appointments
    return (
        <div className='card bg-blue p-3 h-100 appointments' >
            <div className='d-flex justify-content-end align-items-center mb-4'>
                <div className='mx-2'>
                    <img
                        src={userIcon}
                        alt="User Icon"
                        style={{ width: '35px', height: '30px', }}
                    />
                </div>

                <FontAwesomeIcon icon={faPlusSquare} style={{ color: '#330da1' }} fontSize={'30px'} />

            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <CalendarUI />
                </div>
            </div>
            <div className="row">
                {appointments.map((appointment, index) => (
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0">
                        <div className={`card ${appointment.type === "Dentist" ? "schedule" : "bg-shaded"} p-2 m-1`} key={index} style={{ borderRadius: '20px', }}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span className={` ${appointment.type !== "Dentist" && "fw-bold"} text-break`} style={{ maxWidth: "90%" }}>{appointment.type}</span>
                                <span className='ms-1' style={{ "fontSize": '28px' }}>{appointment.image}</span>
                            </div>
                            <p className="text-start m-0">{appointment.appointmentTime}</p>
                            <p className="text-start text-break" >{appointment.doctorName}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row mt-4 ">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h6 className='text-start'>The Upcoming Schedule</h6>
                    {Object.entries(upcomingSchedule).map(([day, appointments]) => (
                        <div key={day} className='row my-3'>
                            <span className='text-start'>{day}</span>
                            {appointments.map((appointment, index) => (
                                <div className="card col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 bg-shaded p-2 m-1" key={index} style={{ borderRadius: '20px' }}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span className='font-weight-bold' style={{
                                            maxWidth: "75%",
                                            wordBreak: "break-word",
                                            overflowWrap: "break-word",
                                        }}>{appointment.type}</span>
                                        <span className='ms-4' style={{ "fontSize": '20px' }}>{appointment.icon}</span>
                                    </div>
                                    <p className="text-start">{appointment.time}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
