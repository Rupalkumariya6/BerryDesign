import React from 'react'

const Ageresult = ({ Age }) => {
    return (
        <>
            <h1 className='text-center text-xl'>You are <span className='text-red-600 font-semibold'>{Age.Years}</span> Years, <span className='text-red-600 font-semibold'> {Age.Months}</span> Months, <span className='text-red-600 font-semibold' >{Age.Days}</span> Days Old. </h1>
        </>
    )
}

export default Ageresult