import React from 'react';
import BoxRating from './BoxRating';
import styles from './ModuleRatingsSummary.module.css';

/**
 * Component to display a summary of module ratings using box indicators
 * 
 * @param {Object} props
 * @param {number} props.lectureClarity - Rating for lecture clarity (quality metric)
 * @param {number} props.contentRelevance - Rating for content relevance (quality metric)
 * @param {number} props.contentDifficulty - Rating for content difficulty (quantity metric)
 * @param {number} props.overallWorkload - Rating for overall workload (quantity metric)
 * @param {number} props.teamDependency - Rating for team dependency (quantity metric)
 * @returns {JSX.Element}
 */
function ModuleRatingsSummary({ 
  lectureClarity,
  contentRelevance, 
  contentDifficulty, 
  overallWorkload, 
  teamDependency 
}) {
  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.ratingsGrid}>
        {/* Quality metrics - use green/blue colors */}
        <BoxRating 
          rating={lectureClarity} 
          label="Lecture Clarity" 
          size="medium" 
          color="green"
        />
        <BoxRating 
          rating={contentRelevance} 
          label="Content Relevance" 
          size="medium" 
          color="blue"
        />
        
        {/* Quantity/intensity metrics - use orange/purple/teal colors */}
        <BoxRating 
          rating={contentDifficulty} 
          label="Content Difficulty" 
          size="medium" 
          color="orange"
        />
        <BoxRating 
          rating={overallWorkload} 
          label="Overall Workload" 
          size="medium" 
          color="purple"
        />
        <BoxRating 
          rating={teamDependency} 
          label="Team Dependency" 
          size="medium" 
          color="teal"
        />
      </div>
    </div>
  );
}

export default ModuleRatingsSummary; 