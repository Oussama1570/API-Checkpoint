import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard'; // Import UserCard

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setListOfUsers(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="user-list-container">
      
      <div className="user-list">
        {listOfUsers.map((user) => (
          <div key={user.id}>
            <UserCard user={user} /> {/* Pass user data to UserCard */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;