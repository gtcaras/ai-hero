import { Link } from 'react-router-dom';
export default function TutorialCard({ tutorial }) {
    return (
        <div>
            <h2>{tutorial.title}</h2>
            <p>{tutorial.description}</p>
            <Link to={`/tutorial/${tutorial.id}`}>View Tutorial</Link>
        </div>
    );
}