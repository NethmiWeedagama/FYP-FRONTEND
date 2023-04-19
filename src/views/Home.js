import React from 'react';

import Common from './Common';
import home from "assets/img/homePage.webp";
const Home = () => {
    return (
        <>
            <Common 
                name='Severity and Priority of Defect Classification with' 
                imgsrc={home} 
                isCompName={true}
                compName="BUGCLASSIFIER"
                visit='/login' 
                btnname="Get Started" 
            />
        </>
    )
}
export default Home;