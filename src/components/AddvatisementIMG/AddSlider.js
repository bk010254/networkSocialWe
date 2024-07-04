import React, { useState } from 'react';
import './SliderIMg.css';

const AddSlider = ({ imagesData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1));
    };

    // Ensure imagesData is not undefined or null and is an array
    if (!imagesData || !Array.isArray(imagesData) || imagesData.length === 0) {
        return null; // or some default component or message
    }

    return (
       <div className="slider">
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          {imagesData.map((image, index) => (
            <div
              key={index}
              className={index === currentIndex ? 'slide active' : 'slide'}
            >
              {index === currentIndex && (
                <img src={image.img} alt={`Slide ${index}`} className="image" />
              )}
            </div>
          ))}
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default AddSlider;
