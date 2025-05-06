import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Select = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate();

  // Fetch data from backend
  useEffect(() => {
    axios.get('http://localhost:2000/select')
      .then(res => {
        setData(res.data);
      })
      .catch((err) => {
        console.log('Failed to fetch data', err)
      })
  }, [])

  // Fix: refresh list after delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:2000/delete/${id}`)
      .then((res) => {
        alert('removed successfully');
        // Reload the data
        axios.get('http://localhost:2000/select')
          .then(res => setData(res.data));
      })
      .catch((err) => {
        alert('failed to remove');
      });
  };

  return (
    <div>
      <Link to="/insert" className='btn btn-success m-2'>New Users</Link>
      <table border={2} className='table table-striped'>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>password</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((manager) =>
              <tr key={manager.id}>
                <td>{manager.id}</td>
                <td>{manager.username}</td>
                <td>{manager.password}</td>
                <td>
                  {/* Fix: use manager.id instead of data.id */}
                  <Link to={`/update/${manager.id}`} className='btn btn-info m-1'>Update</Link>
                  <button onClick={() => handleDelete(manager.id)} className='btn btn-danger m-1'>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Select
  