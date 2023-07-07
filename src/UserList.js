import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './api';

const UserList = () => {
  const users = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();
  console.log(users.data)
const employees = users.data;
console.log(employees)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        console.log(data.data)
        dispatch({ type: 'SET_USERS', payload: data });
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
            {employees.map((user) => (
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
