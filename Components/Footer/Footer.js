import React from 'react'
const Footer = () => {
  return (
    <div className='mx-auto container'>
      <div style={{ border: '1px solid #262626', width: '100%' }}></div>
      <div className='flex flex-col md:py-5 md:flex-row  justify-between items-center'>
        <div className='py-5 md:py-0'>
          <img src='./images/Frame 161.svg' alt='' />
        </div>
        <div className='flex gap-4 items-center pb-5 md:pb-5'>
          <img src='./images/twitter.svg' alt='' />
          <img src='./images/linked_in.svg' alt='' />
          <img src='./images/spotify.svg' alt='' />
          <img src='./images/gmail.svg' alt='' />
        </div>
      </div>
      <div style={{ border: '1px solid #262626', width: '100%' }}></div>

      <div className='flex flex-col justify-center items-center py-4'>
        <p className=' text-base  leading-6 text-[#A3A3A3] font-[avenir] font-normal '>Privacy Policy | Terms and Conditions</p>
        <p className='text-[#FFFFFF] text-lg font-[avenir] font-normal leading-7'>@ 2022 Wove Labs, Inc, All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer
