import React from 'react'
import { useState } from 'react'
import { differenceInYears } from "date-fns";
import { differenceInMonths } from "date-fns";
import { differenceInDays } from "date-fns";
import Ageresult from './Ageresult';


const Agecal = () => {
    const [Birthdate, setBirthdate] = useState('')
    const [Age, setAge] = useState(null)

    const handlechangedate = (e) => {
        setBirthdate(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault()

    }
    const calculateage = () => {

        const today = new Date();
        const Birthdateobj = new Date(Birthdate);
        const ageYears = differenceInYears(today, Birthdateobj);
        const ageMonths = differenceInMonths(today, Birthdate)
        const ageDays = differenceInDays(today, Birthdate)

        setAge({
            Years: ageYears,
            Months: ageMonths,
            Days: ageDays
        })
    }

    return (
        <>
            <div>
                <div className="header text-6xl text-center mt-20">
                    <h1>Age Calculator</h1>
                </div>
                <div className=" m-10 body text-center">
                    <form onSubmit={handlesubmit}>
                        <input
                            value={Birthdate}
                            type="date"
                            onChange={handlechangedate}
                            className='border border-slate-700 p-2 rounded-lg' />
                        <button
                            disabled={!Birthdate}
                            type='submit'
                            onClick={calculateage}
                            className='border border-slate-700 p-2 ml-4 rounded-lg'>Calculate Age</button>
                    </form>
                </div>
            </div>
            {Age && <Ageresult Age={Age} />}
        </>
    )
}

export default Agecal