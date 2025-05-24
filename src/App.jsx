import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideBar  from './components/SideBar';
import Dashboard from './components/Dashboard';
function App() {

  return (
    <div className="app">
        <SideBar/>
    </div>

  )
}

export default App
