import { EwC } from '@/pages';
import Link from 'next/link';
import { FC } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import styles from './EventGrid.module.css';

const EventGrid: FC<{ events: EwC[] }> = ({ events }) => {
  return (
    <div className={styles.grid}>
      {events.map((e) => {
        const startDate = new Date(e.startDate).toLocaleString('en-us', {
          dateStyle: 'long',
          timeStyle: 'short',
          hour12: true,
        });
        return (
          <Link key={e.id} href={`/events/${e.id}`}>
            <div className={styles['event-card']}>
              <div className={styles.category}>{e.category.name}</div>
              <div className={styles.header}>
                <img src={e.imageUrl} alt={e.title} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{e.title}</h3>
                <p className={styles.date}>{startDate}</p>
                <p className={styles.location}>{e.location}</p>
                <div className={styles.price}>
                  <FaRupeeSign />
                  <p>{e.price} onwards</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default EventGrid;
