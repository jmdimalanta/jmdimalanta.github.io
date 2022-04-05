import React, { useState, useEffect } from 'react';
import Header from './Header';

const NewBug = (props) =>{


    return(
        <div>
            <Header 
                titleText={"Create a New Bug!"}
                link={"/"}
                linkText={"Home"}
            />
        </div>
    )
}

export default NewBug;