import EventDetail from '@/components/events/EventDetail';
import { prisma } from '@/server/db';
import { GetStaticPropsContext } from 'next';
import { FC } from 'react';
import { EwC } from '..';

const EventDetailPage: FC<{ eventDetails: EwC }> = ({ eventDetails }) => {
  if (!eventDetails) {
    return <p>Loading...</p>;
  }
  return <EventDetail event={eventDetails} />;
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const eventDetails = await prisma.event.findFirst({
    where: { id: context.params!.id },
  });

  if (!eventDetails) {
    return { notFound: true };
  }
  return {
    props: {
      eventDetails: JSON.parse(JSON.stringify(eventDetails)) as EwC,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await prisma.event.findMany({
    where: { featured: true },
  });
  const paths = events.map((e) => ({ params: { id: e.id } }));
  return {
    paths,
    fallback: true,
  };
}

export default EventDetailPage;
