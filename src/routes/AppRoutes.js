import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import TutorialDetail from '../pages/Tutorial/TutorialDetail';

export default function AppRoutes() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/tutorial' element={<TutorialDetail />} />
        </Routes>
    </BrowserRouter>;
}