import React from 'react';
import BgBottom from '../../images/bg-bottom.svg';

function Banner() {
  return (
    <div className='h-[60vh] bg-[#00000065] text-white bg-homeBanner bg-no-repeat bg-cover grid place-content-center relative'>
      <h1 className='text-center text-2xl  md:text-5xl font-bold md:leading-snug container max-w-[784px]'>
        Empowering students by building tools that improves learning experience.
      </h1>

      <img
        src={BgBottom}
        alt='bgBottom'
        className='hidden container absolute -bottom-[60px] left-0 right-0 md:block'
        aria-hidden='true'
      />
    </div>
  );
}

export default Banner;
