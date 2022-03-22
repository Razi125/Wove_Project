import React from 'react'

const Loop = () => {
    return (
        <div className='mx-auto container  bg-cover bg-center h-[439px]  bg-bgunsplash bg-no-repeat rounded-[16px] mt-8 mb-10 md:mb-20'>
            <div className='flex justify-center items-center md:justify-between md:items-center'>
                <div className='flex flex-col mt-16 md:mt-28 md:ml-14 lg:mt-28 lg:ml-28'>
                    <div>
                        <p className='text-[#FFFFFF] max-w-[190px] md:max-w-[284px] text-2xl md:text-4xl font-semibold font-[montserrat-medium]  leading-9 -tracking-[0.01] py-4 ml-14 lg:ml-0 md:ml-0 '>Stay in the loop</p>
                    </div>

                    <div>
                        <p className='text-[#D4D4D4] max-w-[251px] md:max-w-[624px] text-sm md:text-base font-normal font-[avenir]  leading-4 mb-10 ml-12 lg:ml-0 md:ml-0'>Sign up to be the first to try Wove.</p>
                    </div>
                    <div>
                        <div className='mx-auto container flex flex-col md:flex-row md:bg-[#262626] md:max-w-[547px] h-[60px] md:border-solid md:border-2 md:border-[#404040] md:box-border md:rounded-[56px] '>
                            <input
                                type='text' 
                                className='font-[avenir] text-base font-normal -tracking-[0.02] text-[#D4D4D4] rounded-[10px] py-2 w-[289px] mb-4 bg-[#262626] md:bg-[#262626] border-solid border-2 border-[#404040] md:border-none box-border md:rounded-[5px] md:ml-12 md:px-5 md:py-3.2   md:w-full lg:ml-[0.9rem] lg:mt-[0.9rem]'
                                placeholder='Email Address'
                            />
                            <button className='bg-[#0585F2] w-[289px] md:w-[381px] text-[#FFFFFF] rounded-[56px] font-[montserrat-medium] my-0.3 mx-0.3 font-medium text-base  py-2 px-4 my-1 mx-1'>Request Early Access</button>
                        </div>
                    </div>
                </div>

                <div className=' hidden md:block sm:w-[200.18px] mb-5 md:w-[210.18px] lg:w-[310.18px] h-[109.8px] lg:mt-8 ' >
                    <img className=' sm:-ml-[1rem] md:-ml-[2rem] lg:-ml-[17rem]' src='./images/wove-logomark-rgb.svg' alt='' />
                </div>

            </div>

        </div>
    )
}

export default Loop
