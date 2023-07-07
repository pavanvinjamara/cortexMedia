import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import UserForm from './UserForm';
import UserList from './UserList';
import UserDetails from './UserDetails';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';
import Nav from './Nav';

const App = () => {
  const handleSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };
  return (
    <div>
      <Nav/>
    <Routes>
   
        <Route exact path="/" element={<UserForm onSubmit={handleSubmit} />}/>
        
        <Route path="/user-list" element={<UserList />}/>
       
        <Route path="/user-details/:id" element={<UserDetails />}/>
        
        <Route path="/user-edit/:id" element={ <UserEdit />}/>
        
        <Route path="/user-delete/:id" element={<UserDelete />}/>
       
   
    </Routes>
    </div>
  );
};

export default App;
