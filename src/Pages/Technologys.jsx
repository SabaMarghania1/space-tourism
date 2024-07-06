import styles from './Technology.module.css';
import Header from '../Components/Header/Header';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Technology({ technology }) {
  const [tab, setTab] = useState('Launch vehicle');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const name = searchParams.get('name');
    if (name) {
      setTab(name);
    }
  }, [searchParams]);

  const handleClick = (name) => {
    setTab(name);
    setSearchParams({ name: name });
  };

  const activeTechnology = technology.find((tech) => tech.name === tab);

  return (
    <div className={styles.technologyPage}>
      <Header />
      <div className={styles.main}>
        <p className={styles.subtitle}>
          <span>03</span> SPACE LAUNCH 101{' '}
        </p>

        <div className={styles.content__container}>
          <div className={styles.imageContainer}>
            {/* Conditionally render landscape or portrait image */}
            <img
              src={
              
                window.innerWidth <= 1200
                ? activeTechnology.images.landscape
                : activeTechnology.images.portrait
              }
              alt=""
            />
          </div>
          <div className={styles.content}>
            <div className={styles.numbers}>
              {technology.map((tech, index) => (
                <span
                  className={`${styles.number} ${
                    tech.name === tab ? styles.active : ''
                  }`}
                  key={tech.name}
                  onClick={() => handleClick(tech.name)}
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <div className={styles.text__content}>
              <header className={styles.header}>
                <p className={styles.subheading}>THE TERMINOLOGY...</p>
                <h2 className={styles.title}>
                  {activeTechnology.name.toUpperCase()}
                </h2>
              </header>
              <p className={styles.paragraph}>{activeTechnology.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}