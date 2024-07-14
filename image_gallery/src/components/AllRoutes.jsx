import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from '../pages/MainGallery.jsx';
import DisplayImage from '../pages/DisplayImage.jsx';

const AllRoutes = ({ imagesMap }) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Gallery imagesMap={imagesMap} />} />
                <Route path="/image/:id" element={<DisplayImage imagesMap={imagesMap} />} />
            </Routes>
        </Router>
    );
}

export default AllRoutes;
