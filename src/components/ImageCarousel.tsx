// src/components/ImageCarousel.tsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carousel.css';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
