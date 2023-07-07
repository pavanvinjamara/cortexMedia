import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from './thunks';

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.userList.find((user) => user.id === id));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          {/* Include other user details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetails;
