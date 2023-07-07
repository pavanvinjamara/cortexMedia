import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './api'; // Import the getUsers function from api.js

const UserList = () => {
  const users = useSelector((state) => state.users.userList); // Access the user list from the Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers(); // Fetch user data using the getUsers function
        dispatch({ type: 'SET_USERS', payload: data }); // Dispatch an action to update the user list in the Redux store
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              {/* Add other columns as needed */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobNum}</td>
                {/* Render other user data columns */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
