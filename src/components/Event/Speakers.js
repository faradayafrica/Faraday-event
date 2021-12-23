import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import base from '../../util';
import SkeletonLoader from '../SkeletonLoader';

const data = [
  {
    title: 'Event Title',
    desc: 'Lorem ipsum dolor',
    image:
      'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
  },
  {
    title: 'Event Title',
    desc: 'Lorem ipsum dolor',
    image:
      'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
  },
  {
    title: 'Event Title',
    desc: 'Lorem ipsum dolor',
    image:
      'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
  },
];

function Speakers({ eventSpeakers }) {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    eventSpeakers &&
      eventSpeakers.forEach(speaker => {
        base('event_speaker').find(speaker, function (err, record) {
          if (err) {
            console.error(err);
            return;
          }
          setSpeakers(prevState => [...prevState, record]);
        });
      });
  }, [eventSpeakers]);

  return (
    <section className='space-y-4'>
      <h2 className='event__title'>Speakers</h2>

      <div className='flex flex-wrap gap-2'>
        {speakers.length === 0 ? (
          <SkeletonLoader speakers />
        ) : (
          speakers?.map((speaker, i) => (
            <div key={i}>
              <img
                src={speaker?.fields?.profile_image[0].url}
                alt={speaker?.fields?.full_name}
                className='w-[150px] h-[150px] object-cover mx-auto mb-2'
              />
              <h4 className='text-center font-medium'>
                {speaker?.fields?.full_name}
              </h4>
              <p className='text-center font-medium text-[#3f3f41b3]'>
                {speaker?.fields?.title}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Speakers;
