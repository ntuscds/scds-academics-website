import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Academic Excellence',
    img: require('@site/static/img/scds-club-logo.png').default,
    description: (
      <>
        Access comprehensive module reviews, past year paper solutions, and academic resources 
        to excel in your computing studies.
      </>
    ),
  },
  {
    title: 'Career Development',
    img: require('@site/static/img/scds-club-logo.png').default,
    description: (
      <>
        Explore various computing career paths, get internship search tips, and prepare for
        technical interviews with our resources.
      </>
    ),
  },
  {
    title: 'Specialized Sub-clubs',
    img: require('@site/static/img/scds-club-logo.png').default,
    description: (
      <>
        Join our specialized communities in AI/ML, High-Performance Computing, and Cybersecurity
        to deepen your knowledge in specific domains.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
