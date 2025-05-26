import React from 'react'
import  navigationMenu  from '../data/NavigationData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    // Rendering the sidebar menus using the mock navigation data
    return (
        <div className='sidebar  card w-100' style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h4><span style={{ color: '#07e9d6' }}>Health</span>care.</h4>
            <div className='flex-grow-1 mt-3'>
                {navigationMenu?.map((section, idx) => (
                    <div key={idx}>
                        <h6 className='d-flex align-items-start text-secondary'>{section.category}</h6>
                        <ul className='ps-0'>
                            {section.items.map((item, index) => (
                                <li key={index} className={`list-type-none d-flex justify-content-start align-items-center ${item.label === "Dashboard" ? "text-dark" : "text-secondary"} py-2`} >
                                    <FontAwesomeIcon className='me-3' icon={item.icon} />
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className='mt-auto d-flex justify-content-start align-items-center text-secondary '>
                <FontAwesomeIcon icon={faGear} className='me-3' /> <h6>Settings</h6>
            </div>
        </div>
    )
}

export default SideBar;