import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser } from './services/userService';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    try {
      await createUser(name);
      setName('');
      loadUsers();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>N-Tier App (React + FastAPI + Dict DB)</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter user name..." 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Add User</button>
      </form>

      <h3>User List:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;