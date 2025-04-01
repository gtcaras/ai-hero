import './Search.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
function Search() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    console.log('query', query)
    const [results, setResults] = useState([]);
    
        useEffect(() => {
            async function fetchResults() {
                const response = await fetch(`/api/search?query=${query}`);
                const data = await response.json();
                setResults(data);
            }
            fetchResults();
        }, [query]);
    return (
        <div className="search-container">
                <Header />
                <h1>Search Results for "{query}"</h1>
                {results.length > 0 ? (
                    <ul className="search-results">
                        {results.map(result => (
                            <li key={result.id}>{result.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-results">No results found.</p>
                )}
            </div>
        );
    }
export default Search;