import React from 'react';
import { Link } from 'react-router-dom';
import './ImageCard.css'; 

const ImageCard = ({ image }) => {
    return (
        <Link to={`/image/${image.id}`} className='imagecard-link'>
            <div className='imagecard'>
                <img src={image.url} alt={image.title} className='image'/>
                <div className="details">
                    <div className="title">
                        {image.title}
                        </div>
                    <div className="description">
                        {image.description}
                    </div>
                    <div className="user">
                        User {image.user}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ImageCard;
