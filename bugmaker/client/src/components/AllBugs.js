import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import{Link, navigate} from '@reach/router'

const AllBugs = (props) =>{

    const [bugList, setBugList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/bugs")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setBugList(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return(
        <div>
            <Header 
                titleText={"BugMaker"}
                link= {"/new"}
                linkText= {"New Bug"}
            />
            <h2>Reported Bugs:</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Bug Title</th>
                        <th>Platform</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bugList.map((bug, index)=>(
                            <tr key={bug._id}>
                                <td>{bug.title}</td>
                                <td>{bug.platform}</td>
                                <td>
                                    <Link to={`/bug/${bug._id}`}>View</Link>
                                    <Link to={`/edit/bug/${bug._id}`}> | Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllBugs;