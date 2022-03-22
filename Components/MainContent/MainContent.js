import React from 'react'
import InputBtn from '../commonComponents/InputBtn/InputBtn'

const MainContent = () => {
  return (
    <div className=' top-[-10px] relative'>
      <img className='absolute md:top-[-100px]' src='./images/backgroundImage.png' alt=''/>
      <div className='flex flex-col justify-center items-center pt-24'>
        <p className='text-[#FFFFFF] max-w-[343px] md:max-w-[584px] lg:max-w-[736px] pb-7 text-center text-3xl md:text-5xl lg:text-6xl font-bold font-[montserrat] leading-[33px] md:leading-[48px] lg:leading-[66px]'>The Collaboration Meta-Layer for <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#0585F2] to-[#A1FCE8]'>
          Work</span></p>
        <p className='text-[#D4D4D4] max-w-[327px] md:max-w-[521px] lg:max-w-[636px] pb-12 text-center text-sm md:text-base lg:text-lg font-[350] font-[avenir] leading-[21px] md:leading-6 lg:leading-[23px]'>The apps you already use, accessible and visible in one place. Host meetings, track progress, and organize your tools in Wove.</p>
      </div>
      <div>
        <InputBtn/>
      </div>
    </div>
  )
}

export default MainContent
