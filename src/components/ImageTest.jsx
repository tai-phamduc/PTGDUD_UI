import React from 'react';
import { getImageUrl } from '../utils/imageUtils';

// This component demonstrates how to use the getImageUrl helper
const ImageTest = ({ imageName, altText, className }) => {
  return (
    <img 
      src={getImageUrl(imageName)} 
      alt={altText || 'Image'} 
      className={className}
      onError={(e) => {
        console.error(`Failed to load image: ${imageName}`);
        e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
      }}
    />
  );
};

export default ImageTest;
