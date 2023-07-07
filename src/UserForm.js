import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="mobNum">Mobile Number</label>
        <input type="number" id="mobNum" {...register('mobNum', { required: true })} />
        {errors.mobNum && <span>This field is required</span>}
      </div>

      <div>
        <label>Gender</label>
        <div>
          <label htmlFor="male">
            <input type="radio" id="male" value="male" {...register('gender', { required: true })} />
            Male
          </label>
        </div>
        <div>
          <label htmlFor="female">
            <input type="radio" id="female" value="female" {...register('gender', { required: true })} />
            Female
          </label>
        </div>
        {errors.gender && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="jobRole">Job Role</label>
        <input type="text" id="jobRole" {...register('jobRole', { required: true })} />
        {errors.jobRole && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="experience">Experience</label>
        <input type="text" id="experience" {...register('experience', { required: true })} />
        {errors.experience && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="qualification">Qualification</label>
        <input type="text" id="qualification" {...register('qualification', { required: true })} />
        {errors.qualification && <span>This field is required</span>}
      </div>

      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
