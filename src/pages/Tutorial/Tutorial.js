import './Tutorial.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Tutorial() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [tutorials, setTutorials] = useState([]);
    useEffect(() => {
        async function fetchTutorials() {
            const response = await fetch(`/api/tutorials?search=${query}`);
            const data = await response.json();
            setTutorials(data);
        }
        fetchTutorials();
    }, [query]);
    return (
        <div className="tutorial-container">
            <h1>Search Results for "{query}"</h1>
            {tutorials.length > 0 ? (
                <ul className="tutorial-list">
                    {tutorials.map(tutorial => (
                        <li key={tutorial.id}>{tutorial.title}</li>
                    ))}
                </ul>
            ) : (
                <p className="no-results">No tutorials found.</p>
            )}
        </div>
    );
}

export default Tutorial;