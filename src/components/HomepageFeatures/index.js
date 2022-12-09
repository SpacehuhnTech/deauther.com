import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    src: 'img/512.png',
    description: (
      <>
        blablabla blablabla blablabla blablabla blablabla
        blablabla blablabla blablabla blablabla blablabla
      </>
    ),
  },
  {
    title: 'Easy to DIY',
    src: 'img/512.png',
    description: (
      <>
        blablabla blablabla blablabla blablabla blablabla
        blablabla blablabla blablabla blablabla blablabla
      </>
    ),
  },
  {
    title: 'Learn & Test',
    src: 'img/512.png',
    description: (
      <>
        blablabla blablabla blablabla blablabla blablabla
        blablabla blablabla blablabla blablabla blablabla
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} />
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
