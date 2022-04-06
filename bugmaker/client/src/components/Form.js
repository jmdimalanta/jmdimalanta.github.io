import React from "react";
import { Link } from "@reach/router";
import axios from "axios";

const Form = (props) => {

    const {bug, setBug, submitHandler, errors, buttonText} = props;

    const onChangeHandler = (e)=>{
        const newStateObject = {...bug};
        newStateObject[e.target.name] = e.target.value;

        console.log("e.target.name = ", e.target.name)
        console.log("e.target.value =", e.target.value)

        setBug(newStateObject);
    }



    return(
        <div className="form-control w-25 mx-auto text center my-3 border border-3">
            <form onSubmit={submitHandler}>
                <div>
                    <label className="form-label mx-auto">Title</label>
                    <input className="form-control" value={bug.title} name="title" onChange={(e)=> onChangeHandler(e)} type="text"/>

                    {
                        errors.title ?
                            <span>{errors.title.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label className="form-label mx-auto">Description</label>
                    <textarea className="form-control" value={bug.description} name="description" onChange={(e)=> onChangeHandler(e)} type="text"/>

                    {
                        errors.description ?
                            <span>{errors.description.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label className="form-label mx-auto">Observed</label>
                    <input className="form-control" value={bug.observed} name="observed" onChange={(e)=> onChangeHandler(e)} type="text"/>

                    {
                        errors.observed ?
                            <span>{errors.observed.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label className="form-label mx-auto">Expected</label>
                    <textarea className="form-control" value={bug.expected} name="expected" onChange={(e)=> onChangeHandler(e)} type="text"/>

                    {
                        errors.expected ?
                            <span>{errors.expected.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label className="form-label mx-auto">Reproducibility</label>
                    <input className="form-control" value={bug.reproRate} name="reproRate" onChange={(e)=> onChangeHandler(e)} type="number"/>

                    {
                        errors.reproRate ?
                            <span>{errors.reproRate.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label className="form-label mx-auto">Platform</label>
                    <select className="form-control" value={bug.platform} onChange={onChangeHandler} name="platform">
                        <option value="None" defaultValue hidden>Select a Platform</option>
                        <option value="iOS">iOS</option>
                        <option value="Android">Android</option>
                        <option value="PC">PC</option>
                        <option value="Playstation">PlayStation</option>
                        <option value="Xbox">Xbox</option>
                        <option value="Nintendo">Nintendo</option>
                    </select>

                    {
                        errors.platform ?
                            <span>{errors.platform.message}</span>
                            : null
                    }
                </div>

                <button className="btn btn-primary my-3">{buttonText}</button>
            </form>
        </div>
    )
}

export default Form;