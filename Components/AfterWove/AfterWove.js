import React from 'react'

const AfterWove = () => {
  return (
    <div className='mx-auto container flex flex-col xl:justify-between xl:flex-row'>
      <div className='flex flex-col xl:w-[406px] justify-center items-center lg:mt-44 xl:justify-start xl:items-start'>
        <div >
          <p className='text-[#FFFFFF] text-2xl text-center xl:text-left md:text-3xl  font-semibold montserrat-medium not-italic  leading-6 md:leading-[30px] lg:leading-9 max-w-[157px] md:max-w-[196px] xl:max-w-[204px] -translate-[0.01em] mb-4'>
            After Wove
          </p>
        </div>
        <div >
          <p className='text-[#A3A3A3] text-sm text-center xl:text-left md:text-base lg:text-base font-normal avenir not-italic leading-5 md:leading-6  lg:leading-[26px]  max-w-[343px] md:max-w-[546px] xl:max-w-[296px] mb-4 -translate-[0.01em]'>
            Fluid collaboration and visibility across your entire work stack. It’s like your apps all talk to each other.
          </p>
        </div>
      </div>

      {/** Card  Part */}
      <div className='flex flex-col md:mt-8 '>
        <div className='grid grid-cols-3 ml-10 md:mx-16 lg:ml-10  md:gap-24 lg:gap-44 mb-6 relative'>
          <div>
            <button className='text-[#FFFFFF]  md:text-xl font-normal leading-5  font-[avenir] text-[8px]  md:py-4 md:px-4 w-[63px] h-[26px] md:pb-9  md:w-[6.735rem] md:h-7  lg:w-40 lg:h-16 border-solid border border-[#60A5FA] rounded-[6px]'>Zoom</button>
          </div>
          <div>
            <button className=' text-[#FFFFFF] md:text-xl font-normal leading-5  font-[avenir] md:pb-9 text-[8px]  md:py-4 md:px-4 w-[63px] h-[26px] md:w-[6.735rem] md:h-7 lg:w-40 lg:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Miro</button>
          </div>
          <div>
            <button className=' text-[#FFFFFF] md:text-xl font-normal leading-5  font-[avenir] md:pb-9 text-[8px]  md:py-4 md:px-4 w-[63px] h-[26px] md:w-[6.735rem] md:h-7 lg:w-40 lg:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Figma</button>
          </div>

          <div className='absolute max-w-[55.38px] top-8 left-[7.6rem] md:max-w-[80.38px] lg:max-w-[107.38px] md:top-16 md:left-[16.8rem] lg:left-[24.8rem]  xl:left-[22.8rem] lg:top-16 '>
            <img src='./images/Straight2.svg' alt='' />
          </div>

          <div className='absolute max-w-[268px] top-8 left-4 md:max-w-[523.18px] lg:max-w-[900px] md:top-[3.9rem] md:left-12 lg:top-16 lg:left-20 xl:left-12'>
            <img src='./images/Multi.svg' alt='' />
          </div>
        </div>

        <div className='flex justify-center items-center mt-5  md:my-16 lg:my-20 '>
          <button className='text-[#FFFFFF] text-[8px] w-[63px] h-[26px]  md:text-xl font-normal leading-5  font-[avenir]  lg:-ml-[2.35rem] md:py-4 lg:py-3 px-4 md:pb-9 md:w-[122.76px] md:h-[44.24px] lg:w-[150px] lg:h-[60px]  bg-[#63B5FB] rounded-[24px] md:rounded-[8px] lg:rounded-[24px]'>Wove</button>
        </div>

        <div className='grid grid-cols-3 ml-10 md:mx-16 lg:ml-5  md:gap-24 lg:gap-44  mt-8 relative'>

          <div className='absolute max-w-[268px] -top-8 left-4  lg:max-w-[900px] md:max-w-[523.18px] md:top-[-5.1rem] md:left-12  lg:-top-28 lg:left-24 xl:left-[4.1rem]'>
            <img src='./images/Group 5523.svg' alt='' />
          </div>

          <div>
            <button className='text-[#FFFFFF] md:text-xl font-normal leading-5  font-[avenir]  text-[8px]  md:py-4 md:px-4 w-[63px] h-[26px] md:pb-9 md:w-[6.735rem] md:h-7 lg:w-40 lg:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Notion</button>
          </div>
          <div>
            <button className=' text-[#FFFFFF] md:text-xl font-normal leading-5  font-[avenir] text-[8px]  md:py-4 md:px-4 w-[63px] h-[26px] md:pb-9 md:w-[6.735rem] md:h-7 lg:w-40 lg:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Excel</button>
          </div>
          <div>
            <button className=' text-[#FFFFFF] md:text-xl font-normal leading-5  font-[avenir] text-[8px]  md:py-4 md:px-4 w-[63px] h-[26px] md:pb-9 md:w-[6.735rem] md:h-7 lg:w-40 lg:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Dropbox</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AfterWove