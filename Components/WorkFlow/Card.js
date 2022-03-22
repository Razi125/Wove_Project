import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between items-center my-4 mx-6'>
            <div>
                <div className='flex justify-center items-center mb-3'>
                <img className='w-[64px] h-[53.33px]' src='./images/computer_1 2.svg' alt='' />
                </div>    
              <div className='flex justify-center items-center '>
             <p className='text-[#FFFFFF] text-lg text-center md:text-xl lg:text-xl font-medium font-[montserrat-medium] not-italic  leading-5 md:leading-5 max-w-[296px] md:max-w-[224px] lg:max-w-[280px] ml-3  -translate-[0.01em] '>
                Visibility Into Your Workflow
                </p>
            </div>    
            <div className='flex justify-center items-center '>
            <p className='text-[#A3A3A3] text-sm text-center md:text-base lg:text-base font-normal font-[avenir] not-italic leading-5 md:leading-6  lg::leading-[26px]  max-w-[343px] md:max-w-[439px] lg:max-w-[296px] mb-4 -translate-[0.01em] '>
            Wove centralizes information and events scattered across all of your tools into a single place. 
                </p>
            </div>
            
            </div>

            <div>
            <div className='flex justify-center items-center mb-3'>
                <img className='w-[64px] h-[53.33px]' src='./images/structure.svg' alt='' />
                </div>
                <div className='flex justify-center items-center '>    
            <p className='text-[#FFFFFF] text-lg text-center md:text-xl lg:text-xl font-medium font-[montserrat-medium] not-italic  leading-5 md:leading-5 max-w-[296px] md:max-w-[235px] lg:max-w-[280px]  -translate-[0.01em] '>
            Multiplayer Everything
                </p>
                </div>
                <div className='flex justify-center items-center '>    
            <p className='text-[#A3A3A3] text-sm text-center md:text-base lg:text-base font-normal font-[avenir] not-italic leading-5 md:leading-6  lg::leading-[26px]  max-w-[343px] md:max-w-[439px] lg:max-w-[296px] mb-4 -translate-[0.01em] '>
            Use the Wove browser extension to comment and annotate on any website.  Link everything back to a Wove room with a single click.
                </p>
                </div>
            </div>
            <div>
            <div className='flex justify-center items-center mb-3'>
                <img className='w-[64px] h-[53.33px]' src='./images/team.svg' alt='' />
                </div>
                <div className='flex justify-center items-center '>
            <p className='text-[#FFFFFF] text-lg text-center md:text-xl lg:text-xl font-medium font-[montserrat-medium] not-italic  leading-5 md:leading-5 max-w-[296px] md:max-w-[235px] lg:max-w-[280px]  -translate-[0.01em] '>
            Live Collaboration
                </p>
                </div>
                <div className='flex justify-center items-center '>   
                 <p className='text-[#A3A3A3] text-sm text-center md:text-base lg:text-base font-normal font-[avenir] not-italic leading-5 md:leading-6  lg::leading-[26px]  max-w-[343px] md:max-w-[439px] lg:max-w-[296px] mb-4 -translate-[0.01em] '>
                  Embed any web-app into a Wove meeting and work together as a team. Tranform any website into mulitplayer with Wove’s shared browser
                </p>
                </div>
            </div>
        </div>
  )
}

export default Card