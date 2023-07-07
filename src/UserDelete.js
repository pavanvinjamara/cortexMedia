import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUserById } from './thunks';

const UserDelete = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = () => {
    dispatch(deleteUserById(id));
    navigate('/user-list'); // Navigate to user list after deletion
  };

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default UserDelete;
