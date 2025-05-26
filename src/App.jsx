import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
function App() {

  return (
    <div className='row p-2'>
      <div className="app col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-2 ">
        <SideBar />
      </div>
      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-8 '>
        <Dashboard />
      </div>
       <div className='col-xl-5 col-lg-5 col-md-6 col-sm-6 col-xs-8 my-1'>
        <Schedule/>
      </div>
    </div>



  )
}

export default App
