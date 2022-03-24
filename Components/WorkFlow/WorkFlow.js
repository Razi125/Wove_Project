import React from 'react'
import Card from './Card'

const WorkFlow = () => {
    return (
        <>
            <div className='mx-auto container flex justify-center items-center xl:mt-[30.50px] lg:mt-[61.96px] md:mt-[45.80px] mt-[30.96px]'>
                <div>
                    <p className='text-[#FFFFFF] text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold montserrat-medium not-italic  leading-9 md:leading-7 max-w-[260px] md:max-w-[624px]  xl:max-w-[557px]  ml-11 md:ml-5 lg:ml-7 xl:mb-4 lg:mb-4 md:mb-4 mb-3 -translate-[0.01em]'>
                        Built for the Modern Workflow
                    </p>
                    
                    <p className='text-[#A3A3A3] text-center text-sm md:text-base font-normal font-[avenir] not-italic leading-5 md:leading-6  lg::leading-[26px] max-w-[343px] md:max-w-[546px] xl:max-w-[624px] lg:max-w-[546px] xl:mb-[3.648rem] lg:mb-[3.648rem] md:mb-12 mb-[2.5rem] -translate-[0.01em] '>
                        Wove aggregates information scattered across all of your tools into once central source of truth. Never forget to follow up again.
                    </p>
                </div>
            </div>
            <div>
                <Card />
            </div>
        </>
    )
}

export default WorkFlow