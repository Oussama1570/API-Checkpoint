import React from 'react';
import './App.css';
import UserList from './Components/UserList';
import UserCard from './Components/UserCard';
import Navigation from './Components/Navigation';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

<Navigation/>


      <h1 className='UserListTitle'>Users list</h1>
    <UserList/>
    </div>
  );
}

export default App;
