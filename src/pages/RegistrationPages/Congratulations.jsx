import React from 'react'
import {BsCheck2Circle} from "react-icons/bs"
const Congratulations = () => {
  return (
    <>
    <div className="w-full flex justify-center items-center">
        <div className="grid grid-row-2 sm:grid-cols-2 py-[40px] sm:py-[80px] px-4 sm:pr-[140px]">
            <div className="ml-auto mr-auto sm:mr-10">
            <BsCheck2Circle size={150} className="text-tertiary"/>
            </div>
            <div className='flex flex-col justify-center text-tertiary text-center sm:text-left'>
                <span className='sm:block hidden text-2xl sm:text-3xl tracking-wide'>Congratulations</span>
                <span className='text-lg'>Your profile is under verification. We will notify you once your profile is approved</span>
            </div>
        </div>
    </div>

    </>
  )
}

export default Congratulations