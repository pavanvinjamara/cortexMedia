import React, { useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [id, setId] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchEmployeeInfo = async () => {
    try {
      const response = await axios.get(`http://3.109.214.83:4000/emplo1`);
      setEmployeeInfo(response.data);
      console.log(response.data)
      setError(null);
    } catch (error) {
      console.error(error);
      setEmployeeInfo(null);
      setError('Failed to fetch employee information.');
    }
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchEmployeeInfo();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={id} onChange={handleIdChange} />
        <button type="submit">Get Employee Details</button>
      </form>

      {employeeInfo && (
        <div>
          <h2>Employee Details</h2>
          <p>ID: {employeeInfo.id}</p>
          <p>Name: {employeeInfo.name}</p>
          <p>Email: {employeeInfo.email}</p>
          {/* Display other employee details as needed */}
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default UserDetails;
