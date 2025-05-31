import React, { useEffect, useState } from 'react';
import styles from './BoxRating.module.css';

/**
 * BoxRating component displays a rating using filled boxes
 * Better for showing quantities rather than quality ratings
 * 
 * @param {Object} props
 * @param {number} props.rating - The rating value (1-5)
 * @param {string} props.label - Label to display before boxes
 * @param {string} props.size - Size of boxes ('small', 'medium', 'large')
 * @param {string} props.color - Color theme for the boxes
 * @returns {JSX.Element}
 */
function BoxRating({ rating, label, size = 'medium', color = 'blue' }) {
  // Ensure rating is within 0-5 range (allow 0 for empty ratings)
  const validRating = Math.min(Math.max(0, rating), 5);
  
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
  
  // Create array of 5 boxes
  const boxes = Array(5).fill(null).map((_, i) => {
    const isFilled = i < validRating;
    return (
      <div 
        key={i} 
        className={`${styles.box} ${isFilled ? styles.filled : styles.empty} ${styles[effectiveSize]} ${styles[color]}`}
        aria-hidden="true"
      />
    );
  });

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label || "Rating"}:</span>
      <div className={styles.boxes}>
        {boxes}
        <span className={styles.value}>({validRating}/5)</span>
      </div>
    </div>
  );
}

export default BoxRating; 