import React from "react";
import './survey.css';

function Survey(){
    return(
            <div className="survey">
                <h1>Add Survey</h1>
                <input type='text' placeholder="Title"/>
                <input type='text' placeholder="Description"/>
                <input type='submit' placeholder="Description"/>
            </div>
                  
    )
}
export default Survey