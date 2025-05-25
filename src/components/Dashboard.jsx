import { faArrowDown, faArrowRight, faBell, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'bootstrap'
import React from 'react'
import Anatomy from './Anatomy';
import healthIndicators from '../data/HealthIndicators';
import { ProgressBar } from 'react-bootstrap';
import ActivityChart from './ActivityChart';

const Dashboard = () => {
    return (
        <div className='mt-4'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <div className="input-group">
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input type="text" className="form-control" placeholder="Search..." />
                </div>
                <button className='ms-3' style={{ backgroundColor: 'transparent', borderColor: '#dee2e6', }} disabled>
                    <FontAwesomeIcon icon={faBell} style={{ color: 'blueViolet' }} />
                </button>
            </div>

            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h4 className='text-dark'>Dashboard</h4>
                <p><span style={{ color: 'blueViolet' }}>This Week  </span><FontAwesomeIcon icon={faChevronDown} style={{ color: 'gray' }} /></p>
            </div>
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-6 col-xs-6 me-1" >
                    <div className="card p-1 h-100">
                        <Anatomy />
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-5 col-xs-5 ms-3">
                    <div className="row">
                            {healthIndicators.map((indicator, index) => (
                                <div key={index} className="card-body d-flex justify-content-between align-items-center mb-3">
                                    <div className="card p-1 " style={{ width: '100%' }}>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <img src={indicator.image} alt={indicator.name} className='img-fluid float-start' style={{ width: '40px', height: '35px', borderRadius: '50%' }} />
                                            <span className=' text-dark ms-2' >{indicator.name}</span>
                                        </div>
                                        <p className='text-secondary'>{indicator.status}</p>
                                        {/* <ProgressBar  now={70} style={{height:'10px',backgroundColor:`${indicator.color}`}}/> */}
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

            <div className="row">
                <ActivityChart/>
            </div>


        </div>
    )
}

export default Dashboard