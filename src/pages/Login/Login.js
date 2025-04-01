import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/authApi';
import Header from '../../components/Header/Header';
import '../../styles/global.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login({ email, password });
        if (response.success) {
            navigate('/');
        } else {
            alert('Login failed');
        }
    };
    return (
        <div className='loginContainer'>
            <Header />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}