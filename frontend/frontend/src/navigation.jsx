import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom';
const Navigation = () => {
    
  return (

    <div >
    <nav>
        <ul>
          
            <li><a href=""className='text-decoration-none '>home</a></li>
            <li><a href=""className='text-decoration-none'>Admin</a></li>
            <li><a href="/select" className='text-decoration-none'>Users</a></li>
            <li><a href="" className='text-decoration-none'>Import</a></li>
            <li><a href="" className='text-decoration-none'>Report</a></li>
            <li><a href="/insert" className='text-decoration-none' >Logout</a></li>
            
           
        </ul>
    </nav><br /><br />
    
      
     <div className="card">
     <h3 className='text-center text-primary '>  GIKONKO TECHNICAL SECONNDARY SCHOOL</h3>
    <p className='text-center text-secondary'>Hello There I'm Kevin CYUBAHIRO I would like to invite join this school GTSS is boding school lacated at gisagara and  gikonko  </p>
     </div>
     
   <Link to='/insert' className='btn btn-success m-2' >Login</Link>
     
    
    </div>
  )
}

export default Navigation
