import { EwC } from '@/pages';
import { FC } from 'react';
import EventGrid from '../events/EventGrid';
import Divider from '../ui/Divider';
import styles from './FeaturedEvents.module.css';

const FeaturedEvents: FC<{ events: EwC[] }> = ({ events }) => {
  return (
    <section className={styles['featured-events']}>
      <div className={styles.title}>
        <h2>Featured Events</h2>
        <Divider />
      </div>
      <EventGrid events={events} />
    </section>
  );
};

export default FeaturedEvents;
