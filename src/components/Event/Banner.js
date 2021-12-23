import React from 'react';
import overlay from '../../images/home-banner.svg';

function Banner({ bannerImage, eventTitle }) {
  return (
    <div
      className={`h-[60vh] bg -[#00000079] event-banner flex items-center -z-10  `}
    >
      <img
        src={bannerImage}
        alt={eventTitle}
        className='bg-cover w-full h-full object-cover -z-10'
      />
    </div>
  );
}

export default Banner;
