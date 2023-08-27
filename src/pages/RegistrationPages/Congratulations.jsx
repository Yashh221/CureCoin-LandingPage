import React from 'react'
import checkImg from "../../assets/check.svg";

const Congratulations = () => {
  return (
    <>
    <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-2 py-[80px] pr-[140px]">
            <div className="ml-auto mr-10">
            <img src={checkImg} alt="tick" className='w-[200px]'/>
            </div>
            <div className='flex flex-col justify-center text-tertiary'>
                <span className='text-3xl tracking-wide'>Congratulations</span>
                <span className='text-lg'>Your profile is under verification. We will notify you once your profile is approved</span>
            </div>
        </div>
    </div>

    </>
  )
}

export default Congratulations