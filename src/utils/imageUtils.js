/**
 * Helper function to get the correct image URL
 * This handles both imported images and public folder images
 * 
 * @param {string} imagePath - The path to the image
 * @returns {string} - The correct URL to use in src attributes
 */
export const getImageUrl = (imagePath) => {
  // If the image path is already a URL (starts with http or https), return it as is
  if (imagePath && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
    return imagePath;
  }

  try {
    // For images in the src/assets folder, use dynamic import
    // This works with Vite's import.meta.url feature
    const imageUrl = new URL(`../assets/${imagePath}`, import.meta.url).href;
    return imageUrl;
  } catch (error) {
    // Fallback to public folder if the asset import fails
    return `/${imagePath}`;
  }
};

/**
 * Helper function to preload images
 * 
 * @param {string[]} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths) => {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = getImageUrl(path);
  });
};
