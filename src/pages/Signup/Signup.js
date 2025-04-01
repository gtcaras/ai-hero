import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import { signup } from '../../api/authApi';
import Header from '../../components/Header/Header';
import '../../styles/global.css';
 
 export default function Signup() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();
     const handleSubmit = async (e) => {
         e.preventDefault();
         const response = await signup({ email, password });
         if (response.success) {
             navigate('/login');
         } else {
             alert('Signup failed');
         }
     };
     return (
         <div>
             <Header />
             <h2>Signup</h2>
             <form onSubmit={handleSubmit}>
                 <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                 <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                 <button type='submit'>Signup</button>
             </form>
         </div>
     );
 }