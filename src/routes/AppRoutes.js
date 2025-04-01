import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Tutorial from '../pages/Tutorial/Tutorial';
import Search from '../pages/Search/Search';

export default function AppRoutes() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/search' element={<Search />} />
            <Route path='/tutorial' element={<Tutorial />} />
        </Routes>
    </BrowserRouter>;
}