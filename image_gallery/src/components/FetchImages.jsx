import React, { useEffect } from 'react';
import axios from 'axios';

const FetchImages = ({ setImagesMap }) => {
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=20');
                const images = response.data.photos;
                const imagesMap = {};
                for (let image of images) {
                    imagesMap[image.id] = image;
                }
                setImagesMap(imagesMap);
            } catch (error) {
                setImagesMap({});
            }
        };

        fetchImages();
    }, [setImagesMap]);

    return null;
};

export default FetchImages;
