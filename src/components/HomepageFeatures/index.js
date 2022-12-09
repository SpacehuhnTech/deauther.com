import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Scan Select Attack',
    src: 'img/home/1.png',
    description: (
      <>
        It's never been easier to test your own network(s) against Deauthentication attacks.
      </>
    ),
  },
  {
    title: 'Easy to DIY',
    src: 'img/home/2.png',
    description: (
      <>
        Build your own Deauther with common off-the-shelf parts.
      </>
    ),
  },
  {
    title: 'Learn & Test',
    src: 'img/home/3.png',
    description: (
      <>
        Understand WiFi, test networks, find devices, and learn how it all connects!
      </>
    ),
  },
];

function Feature({src, title, description, alt}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureImg} alt={alt} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
