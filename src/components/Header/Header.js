import { Link } from 'react-router-dom';
import '../../styles/global.css';

export default function Header() {
    return (
        <header className='header-container'>
            <h1>AI Hero</h1>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </nav>
        </header>
    );
}