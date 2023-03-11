import CategoryFilter from '@/components/events/CategoryFilter';
import EventGrid from '@/components/events/EventGrid';
import { prisma } from '@/server/db';
import { Category } from '@prisma/client';
import Head from 'next/head';
import { FC, useState } from 'react';
import { EwC } from '..';

const EventsPage: FC<{ events: EwC[]; categories: Category[] }> = ({
  events,
  categories,
}) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const filterCategoryHandler = (category: string) => {
    setFilteredEvents(
      events.filter((e) => {
        if (category === 'all') {
          return true;
        }
        return e.category.name.toLowerCase() === category;
      })
    );
  };
  return (
    <>
      <Head>
        <title>Events around you | Bookingly</title>
        <meta
          property='description'
          content='Look for the most awesome happenings and events around you'
        />
        <meta property='og:title' content='Events around you' />
      </Head>
      <CategoryFilter
        categories={categories}
        filterCategory={filterCategoryHandler}
      />
      <EventGrid events={filteredEvents} />
    </>
  );
};

export async function getServerSideProps() {
  const allEvents = await prisma.event.findMany({
    include: { category: true },
  });

  const categories = await prisma.category.findMany();
  return {
    props: {
      events: JSON.parse(JSON.stringify(allEvents)) as EwC[],
      categories,
    },
  };
}

export default EventsPage;
