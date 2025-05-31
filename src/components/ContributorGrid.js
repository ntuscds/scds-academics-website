import React from 'react';
import styles from './ContributorGrid.module.css';

/**
 * Component to display contributors in a grid layout with photos, names, contributions, and LinkedIn
 * 
 * @param {Object} props
 * @param {Array} props.contributors - Array of contributor objects
 * @returns {JSX.Element}
 */
function ContributorGrid({ contributors }) {
  return (
    <div className={styles.contributorGrid}>
      {contributors.map((contributor, index) => (
        <div key={index} className={styles.contributorCard}>
          <div className={styles.photoContainer}>
            <img 
              src={contributor.avatar} 
              alt={`${contributor.name} profile photo`}
              className={styles.profilePhoto}
              onError={(e) => {
                // Fallback to default avatar if image fails to load
                e.target.src = '/img/docs/contributors/default-avatar.png';
              }}
            />
          </div>
          
          <div className={styles.contributorInfo}>
            <h3 className={styles.name}>{contributor.name}</h3>
            
            {contributor.contributions && (
              <div className={styles.contributions}>
                {contributor.contributions.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </div>
            )}
            
            {contributor.linkedin && (
              <a 
                href={contributor.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkedinLink}
              >
                <svg className={styles.linkedinIcon} viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContributorGrid; 