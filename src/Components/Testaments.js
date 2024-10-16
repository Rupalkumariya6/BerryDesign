import React from 'react'

const Testaments = () => {
    return (
        <>
            <div className="main mx-[110px] max-sm:mx-[20px] max-md:mx-[30px] pt-[120px] pb-[120px]" >
                <div className="info px-72 max-sm:px-5 max-mb:px-5 max-xl:px-0">
                    <h1 className='font-bold text-4xl text-center'>Testaments</h1>
                    <p className=' text-lg font-normal pt-4 text-center'>We are so grateful for your positive review and appreciate your support of our product
                    </p>
                </div>
                <div className="cards grid grid-cols-3 max-sm:grid max-sm:grid-cols-1 max-xl:grid max-xl:grid-cols-2   gap-5 h-full pt-20 r">
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px] w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image">
                                <img height="45px" width="45px" src="https://berrydashboard.io/assets/testaments-1-DhJJm1dm.png" alt="" />
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>Nelu</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Quality Support</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>This is a quality team with quality support. Number of available modules is incredible. Anytime I thought "oh I wish it had this" I was able to find exactly that already pre-made in the template.</p>
                        </div>
                    </div>
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px] w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-2sy3h2">
                                <button className='bg-[#ffe57f] h-12 w-12 rounded-full text-[22px] text-white font-medium'>B</button>
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>Bente</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Customer Support</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>Very good customer service! I liked the design and there was nothing wrong, but found out after testing that it did not quite match the functionality and overall design that I needed for my type of software. I therefore contacted customer service and it was no problem even though the deadline for refund had actually expired.</p>
                        </div>
                    </div>
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px] w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image">
                                <img height="45px" width="45px" src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>William</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Code Quality</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>One of the better themes I have used. Beautiful and clean design. Also included a NextJS project. Ultimately it didnt work out for my specific use case, but this is a well organized theme. Definitely keeping it in mind for future projects.</p>
                        </div>
                    </div>
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px] w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image ">
                                <button className='bg-[#00e676] h-12 w-12 rounded-full text-[22px] text-white font-medium'>B</button>
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>Besart</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Customizability</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>Very well written code and good structure. Very customizable and tons of nice components. Good documentation. Team is very responsive too</p>
                        </div>
                    </div>
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px] w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-2sy3h2">
                                <button className='bg-[#f44336] h-12 w-12 rounded-full text-[22px] text-white font-medium'>D</button>
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>Dillon</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Codebase</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>The project template is great, as well as the codebase. I am a backend developer, new to frontend and learning. So this template is turning out to be a great foundation...</p>
                        </div>
                    </div>
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px]  w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-2sy3h2">
                                <button className='bg-[#2196f3] h-12 w-12 rounded-full text-[22px] text-white font-medium'>J</button>
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>Jean</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Well Written</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>Very well written. I use it as a base for completely rewriting our existing apps front end.</p>
                        </div>
                    </div>
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px] w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image">
                                <img height="45px" width="45px" src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>Musaid</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Exceptional</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>Awesome design. Exceptional code quality. Great customer service. I would say, the best theme I have seen in a while</p>
                        </div>
                    </div>
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px] w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-2sy3h2">
                                <button className='bg-[#00e676] h-12 w-12 rounded-full text-[22px] text-white font-medium'>R</button>
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>Rodrigo</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Customer Service</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>Excellent design, you can use in a new project or include in your current project. Multiple components for any use. Good code quality. Great customer service and support.</p>
                        </div>
                    </div>
                    <div className="interface hover:scale-104 hover:transition transform hover:shadow-2xl p-[22px] w-full h-auto rounded-xl border border-[#e3e8ef]">
                        <div className="info flex items-center">
                            <div className="image">
                                <img height="45px" width="45px" src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className="data px-5">
                                <h1 className='text-xl font-medium'>Felipe</h1>
                                <h1 className=' text-base font-medium text-[#2196f3]'>@Best MUI Template</h1>
                            </div>
                        </div>
                        <div className="interface-info">
                            <p className='text-[16px] leading-5 pt-3'>Fantastic design and good code quality. It is a great starting point for any new project. They provide plenty of premade components, page views, and authentication options. Definitely the best I have found for Material UI in Typescript</p>
                        </div>
                    </div>
                </div>
                <div className="read-btn flex justify-center pt-10">
                    <button className='py-2 px-4 border rounded-md text-[#2196f3] border-[#2196f3]'>Read More</button>
                </div>
            </div>
        </>
    )
}

export default Testaments