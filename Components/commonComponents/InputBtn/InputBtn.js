import React from 'react'

const InputBtn = () => {
    return (
        <div className='mx-auto container flex flex-col md:flex-row justify-center items-center md:bg-[#262626]  md:max-w-[414px] lg:max-w-[414px] xl:max-w-[547px] md:border-solid md:border-2 md:border-[#404040]  md:box-border md:rounded-[56px]'>
            <input
                type='text'
                className='montserrat-medium text-base text-[#D4D4D4] bg-[#262626] border-solid border-2 border-[#404040] md:border-none box-border md:rounded-[26px] rounded-[5px]  md:px-5 md:py-3.2 py-2  mb-3 md:mb-0 lg:mb-0  xl:w-[343px] md:w-full lg:w-full w-[343px]'
                placeholder='Email Address'
            />
            <button className='bg-[#0585F2] w-[343px] xl:w-[214px] text-[#FFFFFF] md:my-[0.375rem] md:mx-[0.375rem] xl:my-[0.375rem] xl:mx-[0.375rem]  rounded-[56px] montserrat-medium  font-medium md:text-sm xl:text-base  py-2 px-4 my-1 mx-1'>Request Early Access</button>
        </div>
    )
}

export default InputBtn
