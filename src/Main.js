import React from 'react'
import BtnCards from './Components/BtnCards';
import ChooseBerry from './Components/ChooseBerry';
import ConcenputalApps from './Components/ConcenputalApps';
import Discription from './Components/Discription';
import Figma from './Components/Figma';
import Footer from './Components/Footer';
import Frameworks from './Components/Frameworks';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Testaments from './Components/Testaments';

const Main = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <BtnCards />
            <Figma />
            <Discription />
            <ConcenputalApps />
            <Testaments />
            <ChooseBerry />
            <Frameworks />
            <Footer />
        </>
    )
}

export default Main