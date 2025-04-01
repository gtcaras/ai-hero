import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Search tutorials..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <button type="submit">Search</button>
        </form>
    );
}