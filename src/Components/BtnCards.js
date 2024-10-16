import React from 'react'

const BtnCards = () => {
  return (
    <>
      <div className=" mx-[110px] max-lg:mx-[5px] max-md:mx-[10px] min-[900px]:mx-auto mt-24 pb-24">
        <div className="cards pt-[100] w-full flex max-md:flex max-md:justify-center max-md:flex-wrap ">
          <div className="components max-sm:w-auto max-md:w-auto max-md:flex  rounded-lg h-32 m-2 w-1/3 px-10 py-6  flex justify-between items-center bg-[#ffe57f]">
            <div className="yellow  rounded-lg h-[70px] w-[70px] bg-[#f9eaac] p-4">
              <svg className="MuiSvgIcon-root h-10 w-10 MuiSvgIcon-fontSizeMedium css-nriy5z" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridViewIcon"><path fillRule="evenodd" fill="#ffc107" d="M3 3v8h8V3zm6 6H5V5h4zm-6 4v8h8v-8zm6 6H5v-4h4zm4-16v8h8V3zm6 6h-4V5h4zm-6 4v8h8v-8zm6 6h-4v-4h4z"></path></svg>
            </div>
            <div className="comp text-center sm:pl-4 sm:text-3xl md:text-3xl  md:pl-4">
              <p className='lg:text-5xl font-bold'>150+</p>
              <p className='text-xl font-medium'>Components</p>
            </div>
          </div>
          <div className="apllications max-sm:w-auto max-md:w-auto max-md:flex rounded-lg h-32 m-2 w-1/3 px-10 py-6 flex justify-between items-center bg-[#90caf9]">
            <div className="blue rounded-lg h-[70px] w-[70px] bg-[#bcdcf7] p-4">
              <svg className="MuiSvgIcon-root h-10 w-10 MuiSvgIcon-fontSizeMedium css-1lu0yxm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WidgetsOutlinedIcon"><path fill='#2196f3' d="m16.66 4.52 2.83 2.83-2.83 2.83-2.83-2.83zM9 5v4H5V5zm10 10v4h-4v-4zM9 15v4H5v-4zm7.66-13.31L11 7.34 16.66 13l5.66-5.66zM11 3H3v8h8zm10 10h-8v8h8zm-10 0H3v8h8z"></path></svg>
            </div>
            <div className="comp text-center sm:pl-4 sm:text-3xl md:text-3xl  md:pl-4">
              <p className='lg:text-5xl font-bold'>8+</p>
              <p className='text-xl font-medium'>Applications</p>
            </div>

          </div>
          <div className="Pages max-md:justify-center max-sm:w-auto max-md:w-auto max-md:flex  rounded-lg h-32 m-2 w-1/3 px-10 py-6 flex justify-between items-center bg-[#b39ddb]">
            <div className="yellow rounded-lg h-[70px] w-[70px] bg-[#dfd1f7] p-4">
              <svg className="MuiSvgIcon-root h-10 w-10 MuiSvgIcon-fontSizeMedium css-1lu0yxm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WebOutlinedIcon"><path fill='#673ab7' d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM20 18h-3.5V9H20z"></path></svg>
            </div>
            <div className="comp text-center sm:pl-4 sm:text-3xl md:text-3xl md:pl-4 ">
              <p className='lg:text-5xl font-bold'>100+</p>
              <p className='text-xl font-medium'>Pages</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BtnCards