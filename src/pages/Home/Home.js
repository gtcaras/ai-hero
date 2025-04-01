import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/Searchbar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchTutorials } from '../../api/tutorialApi';
import TutorialCard from '../../components/Tutorial/TutorialCard';
import '../../styles/global.css';
import './Home.css';

export default function Home() {
    const [tutorials, setTutorials] = useState([]);
    useEffect(() => {
        fetchTutorials().then(setTutorials);
    }, []);
    return (
        <div className='home-container'>
            <Header />
            <h1>Welcome to AI Hero</h1>
            <h4>You can use the search below to find tutorials on how to use AI to effectively accomplish tasks such as building a website, editing photos, etc.</h4>
            <SearchBar />
            <div>
                {tutorials.map(tutorial => <TutorialCard key={tutorial.id} tutorial={tutorial} />)}
            </div>
            <Footer />
        </div>
    );
}