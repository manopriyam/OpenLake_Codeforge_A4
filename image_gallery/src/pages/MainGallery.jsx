import React from 'react';
import './MainGallery.css';
import ImageCard from '../components/ImageCard.jsx';
import ErrorPage from './ErrorPage.jsx';

const Gallery = ({ imagesMap }) => {
    return (
        <>
            {imagesMap && Object.keys(imagesMap).length > 0 ? (
                <div className='maingallery'>
                    <div className='heading'>IMAGE GALLERY</div>
                    <div className='gallery'>
                        {Object.values(imagesMap).map((image, index) => (
                            <ImageCard key={index} image={image} />
                        ))}
                    </div>
                </div>
            ) : (
                <ErrorPage />
            )}
        </>
    );
};

export default Gallery;
