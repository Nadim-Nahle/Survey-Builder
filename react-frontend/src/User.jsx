import React from "react";
import { useEffect,useState } from "react";
import axios from "./api/axios";

function SurveyInfo(){
    
    const[data, setData] = useState([])

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/v1/survey')
        .then(res => {
            
            setData(res.data.survey)
        })
    },[])

    const arr = data.map((data, index) => {
        //console.log(data.question_name)
        console.log(data)
        return (
            
            <h1>questions</h1>
            
        )
    })
    

    return(

        <div className="hello">
            <h1>Answer the questions</h1>
            
            {arr}
            
        </div>

    )

}

export default SurveyInfo;