
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {loginUser}   from '../../redux/authSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      //  console.log(response.data)
      dispatch(loginUser({ username }));
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <br></br>
      <Link to="/register">
      <button >register</button>
      </Link>
      
    </div>
  );
}

export default Login;
