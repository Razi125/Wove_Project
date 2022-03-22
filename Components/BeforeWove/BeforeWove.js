import React from 'react'

const BeforeWove = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-col lg:w-1/3 justify-center items-center lg:mt-56 lg:justify-start lg:items-start'>
        <div >
          <p className='text-[#FFFFFF] text-2xl text-center lg:text-left  md:text-3xl lg:text-4xl font-semibold font-[montserrat-medium] not-italic  leading-6 md:leading-[30px] lg:leading-9 max-w-[157px] md:max-w-[196px] lg:max-w-[406px] -translate-[0.01em] mb-4 '>
            Before Wove
          </p>
        </div>
        <div >
          <p className='text-[#A3A3A3] text-sm text-center lg:text-left md:text-base lg:text-base font-normal font-[avenir] not-italic leading-5 md:leading-6  lg::leading-[26px]  max-w-[343px] md:max-w-[546px] lg:max-w-[296px] mb-4 -translate-[0.01em] '>
            Silos that make it a nightmare to keep track, making you switch between tools back and forth
          </p>
        </div>
      </div>

      {/** Card  Part */}
      <div className='flex flex-col md:mt-8'>
        <div className='flex flex-row justify-center items-center ml-24  md:ml-32 lg:ml-80 mb-4 lg:mb-20 md:mb-11 relative'>
          <div>
            <button className='text-[#FFFFFF]  lg:text-xl font-normal leading-5  font-[avenir] py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px]  md:pb-9  md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] lg:w-40 lg:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Zoom</button>
          </div>
          <img className='w-[34.01px] h-[63.78px] md:w-auto md:h-auto' src='./images/Straight.svg' alt='' />
          <div>
            <button className='text-[#FFFFFF]  lg:text-xl font-normal leading-5  font-[avenir]  py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] lg:w-40 lg:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Miro</button>
          </div>
          <img className='w-[34.01px] h-[63.78px] md:w-auto md:h-auto' src='./images/Straight.svg' alt='' />
          <div>
            <button className='text-[#FFFFFF]  lg:text-xl font-normal leading-5  font-[avenir]  py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px]  lg:w-40 lg:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Figma</button>
          </div>

        </div>

        <div className='grid grid-cols-3 ml-6 md:ml-0 lg:ml-[2.5rem] md:gap-24 lg:gap-20  mb-48 relative'>
          <div>
            <button className='text-[#FFFFFF]  lg:text-xl font-normal leading-5  font-[avenir]  py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] lg:ml-24 md:ml-16  lg:w-40 lg:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Notion</button>
          </div>
          <div>
            <button className='text-[#FFFFFF]  lg:text-xl font-normal leading-5  font-[avenir]  py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] ml-7 lg:ml-32 md:ml-8  lg:w-40 lg:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Excel</button>
          </div>
          <div>
            <button className='text-[#FFFFFF]  lg:text-xl font-normal leading-5  font-[avenir]  py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] -ml-[1.25rem] lg:-ml-4 md:-ml-28  lg:w-40 lg:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Dropbox</button>
          </div>

          <div className='absolute max-w-[53.66px]  lg:max-w-[149.04px] md:max-w-[109.25px] left-[3.8rem] -top-[1.9rem] md:left-[10.7rem] md:-top-[4.9rem]  lg:-top-[6.7rem] lg:left-64'>
            <img src='./images/Angle.svg' alt='' />
          </div>

          <div className='absolute   lg:max-w-[672px] md:max-w-[487.74px] md:-top-[4.7rem] max-w-[280px] left-[2.5rem] -top-[2.4rem]  md:left-32 lg:left-44 lg:-top-28 '>
            <img src='./images/S-Shape.svg' alt='' />
          </div>

          <div className='absolute max-w-[51.19px] left-48 -top-[2.2rem]   lg:max-w-[128px] md:max-w-[100.99px] md:top-[-5.1rem] md:left-[25rem]  lg:-top-[6.75rem] lg:left-[37rem]'>
            <img src='./images/Multi1.svg' alt='' />
          </div>

          <div className='absolute max-w-[137.12px] left-48 -top-[2.3rem]  lg:max-w-[352px] md:max-w-[268.06px]  md:top-[-4.75rem] md:left-96  lg:-top-[6.75rem] lg:left-[35rem]'>
            <img src='./images/Hook.svg' alt='' />
          </div>

        </div>
      </div>

    </div>
  )
}
export default BeforeWove