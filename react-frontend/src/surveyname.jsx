import React from "react";
import { useEffect,useState } from "react";
import axios from "./api/axios";
import Home from "./Home";
import SurveyContent from "./surveycontent";

function SurveyName(){
    const[data, setData] = useState([])
    const[isToggled, setIsToggled] = useState(false);

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/v1/question')
        .then(res => {
            
            setData(res.data.name)
        })
    },[])

    const arr = data.map((data, index) => {
        //console.log(data.question_name)
       // console.log(data.id)
        return (
            <>
            <button onClick={() => setIsToggled(!isToggled)}>{data.question_name}</button>
            { isToggled && <SurveyContent />} 
            </>
            
            
        )
       
    })

    return(

        <div className="hello">
            <h1>Choose A Survey</h1>
            
            {arr}
        </div>

    )
    

}

export default SurveyName;