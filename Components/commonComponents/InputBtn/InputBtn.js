import React from 'react'

const InputBtn = () => {
    return (
        <div className='mx-auto container flex flex-col md:flex-row justify-center items-center md:bg-[#262626] md:max-w-[540px] md:border-solid md:border-2 md:border-[#404040]  md:box-border md:rounded-[56px]'>
            <input
                type='text'
                className='font-[montserrat-medium] text-base text-[#D4D4D4] bg-[#262626] border-solid border-2 border-[#404040] md:border-none box-border rounded-[5px]   md:px-5 md:py-3.2 py-2  mb-3 md:mb-0 lg:mb-0   w-[343px] md:w-full lg:w-full  '
                placeholder='Email Address'
            />
            <button className='bg-[#0585F2] w-[343px] md:w-2/3 text-[#FFFFFF] rounded-[56px] font-[montserrat-medium] my-0.3 mx-0.3 font-medium text-base  py-2 px-4 my-1 mx-1'>Request Early Access</button>
        </div>
    )
}

export default InputBtn
