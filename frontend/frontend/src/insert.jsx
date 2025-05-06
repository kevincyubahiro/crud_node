import React from 'react'
import { useEffect,useState } from 'react'

import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const       Insert = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(!username|| !password){
            alert('plz fill these field')
        return
    }
    axios.post('http://localhost:2000/insert',{
        username,password
    })
    .then((res)=>{
       navigate('/select')
    })
    .catch((error)=>{
        alert('not inserted')
    })
    
    }
  return (
    <div className=' card p-5 m-2 container mt-5'>
       
      <form  onSubmit={handlesubmit}>
      
        <h2 className='mb-5 text-primary '>Login</h2>
        Usename:<input type="text" value={username} onChange={e=>setUsername(e.target.value)}  className=' form-control' /><br />
        Password:<input type="text" value={password} onChange={e=>setPassword(e.target.value)}  className=' form-control'/><br />
        <button type='submit' className='btn btn-info m-2'>login</button> <br /> <br />
        <a href=""className=' text-decoration-none'>Create Account</a>
      </form>
      <link rel="stylesheet" href="/" />
    </div>
  )
}

export default Insert
