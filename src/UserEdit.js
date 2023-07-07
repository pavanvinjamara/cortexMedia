import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUserById } from './thunks';

const UserEdit = () => {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    dispatch(updateUserById(id, data));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>Name</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}

        {/* Include other input fields here */}
        
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserEdit;
