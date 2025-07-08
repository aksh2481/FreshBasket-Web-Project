/** @jsx React.createElement */
// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/register', { name, email, password });
            localStorage.setItem('token', data.token);
            history.push('/dashboard'); // Redirect to dashboard or homepage
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;