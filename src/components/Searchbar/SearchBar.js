import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };
    const handleSubmit = () => {
        navigate(`/search?q=${query}`);
    };
    return (
        <div>
            <input type='text' placeholder='Search tutorials...' value={query} onChange={handleSearch} />
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
}