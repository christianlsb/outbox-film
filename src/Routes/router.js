import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../Pages/home"
import Film from '../Pages/Film'
import Header from "../components/Header"

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/Filme/:id" element={ <Film/> } />
        </Routes>
    </BrowserRouter>
    )
};