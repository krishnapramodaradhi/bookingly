import { Event } from '@prisma/client';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef } from 'react';
import { FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi';
import styles from './Hero.module.css';

const Hero: FC<{ heroEvent: Event }> = ({ heroEvent }) => {
  const { imageUrl, startDate } = heroEvent;
  const heroRef = useRef<HTMLElement>(null);
  const beginDate = new Date(startDate).toLocaleDateString('en-us', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.backgroundImage = `url(${imageUrl})`;
    }
  }, [imageUrl]);

  const router = useRouter();
  const actionHandler = () => {
    router.push(`/events/${heroEvent.id}`);
  };
  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles['date-location-container']}>
        <div className={styles['date-container']}>
          <FiCalendar />
          <p>{beginDate}</p>
        </div>
        <div className={styles['location-container']}>
          <FiMapPin />
          <p>{heroEvent.location}</p>
        </div>
      </div>
      <h1>{heroEvent.title}</h1>
      <button className={styles['call-to-action']} onClick={actionHandler}>
        Check it out
        <FiChevronRight size='1.2rem' />
      </button>
    </section>
  );
};

export default Hero;
