import React from 'react'

const ConcenputalApps = () => {
    return (
        <>
            <div className="main bg-[#eef2f6] px-[110px] max-sm:px-[5px] max-md:px-[5px] max-lg:px-[5px] pt-[120px] pb-[120px]" >
                <div className="info px-72 max-sm:px-5 max-md:px-5 max-lg:px-5">
                    <h1 className='font-bold text-3xl text-center'>Explore Concenputal Apps</h1>
                    <p className=' text-lg font-normal pt-4 text-center'>Berry has conceptul working apps like Chat, Inbox, E-commerce, Invoice, Kanban, and Calendar
                    </p>
                </div>
                <div className="px-64 pt-20 pb-8">
                    <img src="https://berrydashboard.io/assets/slider-light-4-D0InGprx.png" alt="" />
                </div>
                <div className="link flex justify-center ">
                    <button className='flex items-center '>
                        <div className="ahref text-xl font-medium">Calendar App</div>
                        <div className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-link" aria-label="link button"><path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path></svg>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ConcenputalApps