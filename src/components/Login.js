import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login process (replace with actual API request)
    login(email, password)
      .then((token) => {
        Auth.login(token);
        navigate('/admin-panel');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulate login success after a brief delay (replace with actual API call)
      setTimeout(() => {
        const token = 'your-auth-token';
        resolve(token);
      }, 1000);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
