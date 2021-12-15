import React from 'react';
import overlay from '../../images/home-banner.svg';

function Banner({ bannerImage }) {
  console.log(bannerImage);
  return (
    <>
      <div
        style={{ position: 'relative' }}
        className={`h-[60vh] bg-[#00000079] flex items-center -z-10 `}
      >
        <img
          src={bannerImage}
          alt=''
          className='bg-cover w-full h-full object-cover -z-10'
        />
        <img
          style={{ position: 'absolute', opacity: 0.6 }}
          src={overlay}
          alt=''
          className='bg-cover w-full h-full object-cover -z-10'
        />
      </div>
    </>
  );
}

export default Banner;
