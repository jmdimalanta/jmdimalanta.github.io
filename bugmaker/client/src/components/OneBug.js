import React, { useState, useEffect } from 'react';
import Header from './Header';

const OneBug = (props) =>{

    return(
        <div>
            <Header 
                titleText={"BugMaker"}
                link= {"/"}
                linkText= {"Home"}
            />
        </div>
    )
}

export default OneBug;