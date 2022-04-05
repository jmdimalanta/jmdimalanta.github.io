import React, { useState, useEffect } from 'react';
import Header from './Header';

const AllBugs = (props) =>{

    return(
        <div>
            <Header 
                titleText={"BugMaker"}
                link= {"/new"}
                linkText= {"New Bug"}

            />
        </div>
    )
}

export default AllBugs;