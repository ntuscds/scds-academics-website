import React, { useEffect, useState } from 'react';
import styles from './StarRating.module.css';

/**
 * StarRating component displays a rating using stars
 * 
 * @param {Object} props
 * @param {number} props.rating - The rating value (1-5)
 * @param {string} props.label - Optional label to display before stars
 * @param {string} props.size - Size of stars ('small', 'medium', 'large')
 * @returns {JSX.Element}
 */
function StarRating({ rating, label, size = 'medium' }) {
  // Ensure rating is within 1-5 range
  const validRating = Math.min(Math.max(1, rating), 5);
  
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and on window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Always use medium size on mobile for better visibility
  const effectiveSize = isMobile ? 'medium' : size;
  
  // Create array of 5 stars
  const stars = Array(5).fill(null).map((_, i) => {
    const isFilled = i < validRating;
    return (
      <span 
        key={i} 
        className={`${styles.star} ${isFilled ? styles.filled : styles.empty} ${styles[effectiveSize]}`}
        aria-hidden="true"
      >
        {isFilled ? '★' : '☆'}
      </span>
    );
  });

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label || "Rating"}:</span>
      <div className={styles.stars}>{stars}</div>
    </div>
  );
}

export default StarRating; 