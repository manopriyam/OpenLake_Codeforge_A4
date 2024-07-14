import React from 'react';
import './DisplayImage.css';
import ErrorPage from './ErrorPage';
import { useParams } from 'react-router-dom';

const DisplayImage = ({ imagesMap }) => {
    const { id } = useParams();
    const image = imagesMap[id];

    return (
        <div className="display">
            {image ? (
                <div className='displayimagecard'>
                    <img src={image.url} alt={image.title} className='displayimage'/>
                    <div className="displaydetails">
                        <div className="displaytitle">
                            {image.title}
                            </div>
                        <div className="displaydescription">
                            {image.description}
                        </div>
                        <div className="displayuser">
                            User {image.user}
                        </div>
                    </div>
                </div>
            ) : (
                <ErrorPage/>
            )}
        </div>
    );
};

export default DisplayImage;
