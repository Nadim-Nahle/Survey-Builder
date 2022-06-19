import React from "react";


function Answer(){
    return(

        <form >
            <div className="survey">
                <h1>write your answers</h1>
                <label>Question 1</label>
                <input type='text' placeholder="Answer 1"   />
                <label>Question 2</label>
                <input type='text' placeholder="Answer 2"   />
                <label>Question 3</label>
                <input type='text' placeholder="Answer 3"   />
                
                <button>Submit</button>
            </div>
        </form>

    )

}

export default Answer;