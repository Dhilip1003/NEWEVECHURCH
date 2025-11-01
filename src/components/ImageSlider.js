import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

// Placeholder images - replace with actual church images
const images = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
