import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';

const Update = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch user data by ID
  useEffect(() => {
    axios.get(`http://localhost:2000/select/${id}`)
      .then((res) => {
        setUsername(res.data[0].username);
        setPassword(res.data[0].password);
      })
      .catch((err) => {
        alert('Failed to fetch data');
        
        console.error(err);
      });
  }, [id]);

  //  Update user
  const handleUpdate = () => {
    axios.put(`http://localhost:2000/update/${id}`, {
      username,
      password
    })
      .then(() => {
        alert('Updated successfully');
        navigate('/select');
      })
      .catch((err) => {
        alert('Update failed');
        console.error(err);
      });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }
    handleUpdate();
  };

  return (
    <div className='card p-4 shadow mt-4'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-primary mb-4'>Update Username</h3>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='Username'
          className='form-control mb-3'
        />
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          className='form-control mb-3'
        />
        <button type='submit' className='btn btn-info shadow-sm'>Update</button>
      </form>
    </div>
  );
};

export default Update;
