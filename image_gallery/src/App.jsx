import React, { useState } from 'react';
import './App.css';
import AllRoutes from './components/AllRoutes.jsx';
import FetchImages from './components/FetchImages.jsx';

const App = () => {
    const [imagesMap, setImagesMap] = useState({});

    return (
        <>
            <FetchImages setImagesMap={setImagesMap} />
            <AllRoutes imagesMap={imagesMap} />
        </>
    );
}

export default App;
