import { faArrowRight, faBell, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Anatomy from './Anatomy';
import healthIndicators from '../data/HealthIndicators';
import { ProgressBar } from 'react-bootstrap';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

// mock data for the activity chart
const data = [
    { day: 'Mon', appt1: 30, appt2: 50, appt3: 70 },
    { day: 'Tue', appt1: 50, appt2: 60, appt3: 20 },
    { day: 'Wed', appt1: 40, appt2: 80, appt3: 30 },
    { day: 'Thu', appt1: 60, appt2: 30, appt3: 50 },
    { day: 'Fri', appt1: 90, appt2: 40, appt3: 60 },
    { day: 'Sat', appt1: 20, appt2: 70, appt3: 40 },
    { day: 'Sun', appt1: 50, appt2: 20, appt3: 80 }
];
const Dashboard = () => {
    return (
        <div className='mt-4' style={{ overflowX: 'auto' }}>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <div className="input-group">
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input type="text" className="form-control" placeholder="Search..."  disabled/>
                </div>
                <button className='ms-3' style={{ backgroundColor: 'transparent', borderColor: '#dee2e6', }} disabled>
                    <FontAwesomeIcon icon={faBell} style={{ color: '#330da1' }} />
                </button>
            </div>

            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h4 className='text-dark'>Dashboard</h4>
                <p><span style={{ color: '#330da1' }}>This Week  </span><FontAwesomeIcon icon={faChevronDown} style={{ color: 'gray' }} /></p>
            </div>
            {/**Dashboard Part -> Anatomy + Health Indicators */}
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-6 col-xs-6 me-1" >
                    <div className="card bg-blue p-1 h-100">
                        <Anatomy />
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-5 col-xs-5 ms-3" style={{ minWidth: '110px' }}>
                    <div className="row">
                        {healthIndicators.map((indicator, index) => (
                            <div key={index} className="card-body d-flex justify-content-between align-items-center mb-3">
                                <div className="card bg-blue p-4" style={{ width: '100%' }}>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img src={indicator.image} alt={indicator.name} className='img-fluid float-start' style={{ width: '40px', height: '35px', borderRadius: '50%' }} />
                                        <span className='text-dark ms-2 indicator-name'>{indicator.name}</span>
                                    </div>
                                    <p className='text-start text-secondary pt-2'>Date: {indicator.date}</p>
                                    <ProgressBar
                                        now={70}
                                        style={{ backgroundColor: '#e0e0e0', height: '10px', marginTop: '5px' }}
                                    >
                                        <ProgressBar
                                            now={70}
                                            style={{ backgroundColor: indicator.color }}
                                        />
                                    </ProgressBar>
                                </div>
                            </div>
                        ))}
                        <span className='d-flex justify-content-end'>Details <FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                </div>

            </div>

            {/**Activity Chart using ReCharts */}
            <div className="row">
                <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card bg-blue p-2 mt-4 mx-0">
                    <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                        <h6>Activity</h6>
                        <p className="text-muted" style={{ fontSize: '12px' }}>3 appointments this week</p>
                    </div>
                    <ResponsiveContainer height={150}>
                        <BarChart data={data}>
                            <XAxis dataKey="day" axisLine={false} tickLine={false} />
                            <YAxis hide />
                            <Tooltip />
                            <Bar dataKey="appt1" fill="#00E0FF" barSize={6} radius={[10, 10, 0, 0]} />
                            <Bar dataKey="appt2" fill="#A1A1A1" barSize={6} radius={[10, 10, 0, 0]} />
                            <Bar dataKey="appt3" fill="#6A5ACD" barSize={6} radius={[10, 10, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>


        </div>
    )
}

export default Dashboard