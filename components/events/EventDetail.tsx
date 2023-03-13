import { EwC } from '@/pages';
import Head from 'next/head';
import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';
import {
  FiCalendar,
  FiMapPin,
  FiBookmark,
  FiTag,
  FiHeart,
  FiMessageSquare,
  FiUser,
} from 'react-icons/fi';
import Divider from '../ui/Divider';
import styles from './EventDetail.module.css';

const EventDetail: FC<{ event: EwC }> = ({ event }) => {
  const startDate = new Date(event.startDate).toLocaleString('en-us', {
    dateStyle: 'medium',
    timeStyle: 'short',
    hour12: true,
  });
  const endDate = new Date(event.endDate).toLocaleString('en-us', {
    dateStyle: 'medium',
    timeStyle: 'short',
    hour12: true,
  });

  const title = `${event.title} | Bookingly`;

  const descriptionWithBreaks = event.description.replaceAll('\\n', '<br />');
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.innerHTML = descriptionWithBreaks;
    }
  }, [descriptionWithBreaks]);
  const headTag = (
    <Head>
      <title>{title}</title>
      <meta name='description' content={event.description} />
    </Head>
  );
  return (
    <>
      {headTag}
      <div className={styles['event-detail-grid']}>
        <div className={styles['img-container']}>
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={1400}
            height={600}
            style={{ maxWidth: '100%', height: 'auto' }}
            priority
          />
        </div>
        <div className={styles['event-details']}>
          <h1>{event.title}</h1>
          <div className={styles['detail-container']}>
            <div className={styles.date}>
              <FiBookmark />
              <p>{startDate}</p>
            </div>
            <div className={styles.date}>
              <FiCalendar />
              <p>{endDate}</p>
            </div>
            <div className={styles.location}>
              <FiMapPin />
              <p>{event.location}</p>
            </div>
            <div className={styles.price}>
              <FiTag />
              <p>&#8377; {event.price} onwards</p>
            </div>
          </div>
          <button className={styles['action']}>Buy Tickets</button>
          <button className={`${styles['action']} ${styles.fav}`}>
            <FiHeart />
            Add to Favourites
          </button>
        </div>
        <div className={styles.description}>
          <h3>About</h3>
          <Divider />
          <p ref={descriptionRef}>This is placeholder for description</p>
          <h3>Venue</h3>
          <Divider />
          <p>{event.location}</p>
        </div>
        <div className={styles.metadata}>
          <h3>Event Guide</h3>
          <Divider />

          <div className={styles['guide-container']}>
            <div className={styles['detail']}>
              <FiUser />
              <div>
                <small>For Ages</small>
                <p>21+</p>
              </div>
            </div>
            <div className={styles['detail']}>
              <FiMessageSquare />
              <div>
                <small>Language</small>
                <p>English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
