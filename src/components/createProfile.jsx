import React, { useState } from 'react';
import { addUser } from '../services/server';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser({ name, email });
      alert('Profile created successfully!');
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateProfile;