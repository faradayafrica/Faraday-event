import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Banner from '../components/Event/Banner';
import Sidebar from '../components/Event/Sidebar';
import Description from '../components/Event/Description';
import Speakers from '../components/Event/Speakers';
import Schedule from '../components/Event/Schedule';
import Footer from '../components/Footer';
import Form from '../components/Event/Form';
import Countdown from '../components/Event/Countdown';
import Navigation from '../components/Navigation';
import base from '../util';
import Back from '../images/back-arrow.svg';

function Event() {
  const params = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    base('events').find(params.eventId, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      // console.log(record);
      setEvent(record);
    });

    window.scrollTo(0, 0);
  }, []);

  const eventTitle = event?.fields?.title;
  const bannerImage = event?.fields?.cover_image[0].url;
  const eventId = event?.id;
  const eventSpeakers = event?.fields?.event_speaker;
  const eventDate = event?.fields?.date;
  const eventTime = event?.fields?.time;
  const eventCompleted = event?.fields?.event_completed === true;
  const eventSchedules = event?.fields?.event_schedule;

  return (
    <div className='relative'>
      <Sidebar />
      <Navigation event />

      <div className='md:ml-[48px]'>
        <div className='hidden md:block container relative'>
          <Link to='/' className='absolute top-2 right-0 flex gap-2'>
            <img src={Back} alt='bg-none inline-block' />
            <span className=' '>Return</span>
          </Link>
        </div>
        <Banner bannerImage={bannerImage} eventTitle={eventTitle} />
        <div className='container'>
          <div className='md:grid gap-8 [grid-template-columns:1fr_1fr] mb-12'>
            <div className='space-y-12'>
              <Countdown
                eventTitle={eventTitle}
                eventDate={eventDate}
                eventTime={eventTime}
              />
              <Description event={event} eventCompleted={eventCompleted} />
              <Speakers eventSpeakers={eventSpeakers} />
              <Schedule eventSchedules={eventSchedules} />
            </div>

            <Form eventId={eventId} eventCompleted={eventCompleted} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Event;
