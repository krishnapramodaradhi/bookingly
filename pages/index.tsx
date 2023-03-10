import Hero from '@/components/home/Hero';
import Head from 'next/head';
import { FC } from 'react';
import { prisma } from '@/server/db';
import { Event, Category } from '@prisma/client';
import FeaturedEvents from '@/components/home/FeaturedEvents';

export type EwC = Event & { category: Category };

const HomePage: FC<{ featuredEvents: EwC[]; mostRecentEvent: EwC }> = ({
  featuredEvents,
  mostRecentEvent,
}) => {
  return (
    <>
      <Head>
        <title>Bookingly</title>
      </Head>
      <Hero heroEvent={mostRecentEvent} />
      <FeaturedEvents events={featuredEvents} />
    </>
  );
};

export async function getStaticProps() {
  const fetchedEvents = await prisma.event.findMany({
    where: { featured: true },
    include: { category: true },
  });
  const mostRecentTimeStamp = Math.min(
    ...fetchedEvents
      .map((e) => e.startDate.getTime())
      .filter((date) => Date.now() < date)
  );

  const mostRecentEvent = fetchedEvents.find(
    (e) => e.startDate.getTime() === mostRecentTimeStamp
  );

  return {
    props: {
      featuredEvents: JSON.parse(JSON.stringify(fetchedEvents)) as EwC[],
      mostRecentEvent: JSON.parse(JSON.stringify(mostRecentEvent)) as EwC,
    },
    revalidate: 86400,
  };
}

export default HomePage;
