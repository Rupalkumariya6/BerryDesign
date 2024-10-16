import React from 'react'

const ChooseBerry = () => {
    return (
        <>
            <div className='bg-[#111936] w-full  mb-[50px] pt-[20px]'>
                <div className=' flex justify-between '>
                    <div className="header h-[420px]">
                        <h2 className='text-white mt-[180px] max-sm:text-2xl max-md:text-2xl max-sm:pl-[20px] pl-[100px] font-bold text-5xl'>Choose Berry for <span className='ml="20px" text-[#2196f3]'>Standardization</span></h2>
                    </div>

                    <div className="max-lg:hidden"><img className='h-[420px] w-[440px] pr-40'
                        src="https://berrydashboard.io/assets/bg-heand-BgtVt5t-.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseBerry