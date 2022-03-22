import React from 'react'
import Card from './Card'

const WorkFlow = () => {
  return (
      <>
    <div className='flex justify-center items-center'>
        <div>
            <p className='text-[#FFFFFF] text-2xl text-center md:text-3xl lg:text-4xl font-semibold font-[montserrat-medium] not-italic  leading-9 md:leading-7 max-w-[343px] md:max-w-[624px] lg:max-w-[557px] md:ml-5 lg:ml-7 my-2 -translate-[0.01em] '>
                Built for the Modern Workflow
                </p>
            <p className='text-[#A3A3A3] text-sm text-center md:text-base font-normal font-[avenir] not-italic leading-5 md:leading-6  lg::leading-[26px] max-w-[343px] md:max-w-[546px] lg:max-w-[624px] mb-4  -translate-[0.01em] '>
                Wove aggregates information scattered across all of your tools into once central source of truth. Never forget to follow up again.
                </p>
        </div>
     </div>
     <div>
         <Card/>
     </div>
     </>
  )
}

export default WorkFlow