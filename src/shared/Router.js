import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import About from '../pages/About';
import Works from '../pages/Works';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
