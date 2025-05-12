import React from 'react';
import StarRating from './StarRating';
import styles from './ModuleRatingsSummary.module.css';

/**
 * Component to display a summary of module ratings
 * 
 * @param {Object} props
 * @param {number} props.lectureClarity - Rating for lecture clarity
 * @param {number} props.contentRelevance - Rating for content relevance
 * @param {number} props.contentDifficulty - Rating for content difficulty
 * @param {number} props.overallWorkload - Rating for overall workload
 * @param {number} props.teamDependency - Rating for team dependency
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
        <StarRating rating={lectureClarity} label="Lecture Clarity" size="medium" />
        <StarRating rating={contentRelevance} label="Content Relevance" size="medium" />
        <StarRating rating={contentDifficulty} label="Content Difficulty" size="medium" />
        <StarRating rating={overallWorkload} label="Overall Workload" size="medium" />
        <StarRating rating={teamDependency} label="Team Dependency" size="medium" />
      </div>
    </div>
  );
}

export default ModuleRatingsSummary; 