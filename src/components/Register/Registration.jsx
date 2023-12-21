import axios from 'axios';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      console.log(response)
      navigate('/home');
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };
 
  return (
    <div>
      <h2>Registration</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
      <br></br>
      <Link to="/">
      <button >login</button>
      </Link>
    </div>
  );
}

export default Registration;
