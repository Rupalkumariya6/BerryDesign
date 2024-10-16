import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Landing = () => {
    return (
        <>
            <div className="main" style={{
                background: 'linear-gradient(360deg, rgb(238, 242, 246) 1.09%, rgb(255, 255, 255) 100%)',
            }}>
                <div className="main ml-[110px] mt-6 flex" >
                    <div className="enteries h-screen w-1/2 max-[900px]:w-screen max-[900px]:h-screen max-[900px]:text-center">
                        <div className="header-enteries w-full">
                            <h1 className='text-6xl font-bold max-lg:hidden'>Use Berry to Power Your Next</h1>
                            <h1 className='text-[65px] text-[#2196f3] font-bold'>React Project</h1>
                        </div>
                        <div className="pera pt-[25px] pl-[5px]">
                            <p className='font-normal pr-20 max-lg:pr-0 text-xl'>Berry is React based Dashboard template which helps you to build faster and beautiful web applications.</p>
                        </div>
                        <div className="btns mt-16 ">
                            <div className="pre-btn ">
                                <button className='px-5 py-2 w-44 bg-[#673ab7] text-white rounded-md font-medium text-lg'><ArrowRightIcon />Live Preview</button>
                                <button className='px-5 py-2 w-44 ml-[20px] text-[#2196f3] font-medium text-lg'>Purchase Now</button>
                            </div>
                        </div>
                        <div className="icons pt-10 min-[900]:visible min-[900px]:flex min-[900px]:justify-center min-xl:hidden ">
                            <img src="https://berrydashboard.io/assets/tech-light-D329XLIh.svg" alt="" width='450px' />
                        </div>

                    </div>
                    <div className="image -mt-10 -ml-16 w-1/2 relative">
                        <div className="header-image">
                            <img className='h-screen w-full max-lg:h-screen max-lg:w-full max-[900px]:hidden' src="https://berrydashboard.io/assets/hero-dashboard-DQLyv36a.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Landing