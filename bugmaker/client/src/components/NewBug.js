import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import Form from './Form';
import {Link, navigate} from '@reach/router'

const NewBug = (props) =>{
    
    const [errors, setError] = useState({})

    const [newBug, setNewBug] = useState({
        title: "",
        description: "",
        observed: "",
        expected: "",
        reproRate: "",
        platform: ""
    })

    const newSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/bugs", 
        newBug)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)
        })
    }


    return(
        <div>
            <Header 
                titleText={"Create a New Bug!"}
                link={"/"}
                linkText={"Home"}
            />
            <Form
            bug={newBug}
            setBug={setNewBug}
            submitHandler={newSubmitHandler}
            errors={errors}
            buttonText={"Add Bug"}
            />
        </div>
    )
}

export default NewBug;