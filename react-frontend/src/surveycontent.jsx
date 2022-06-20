import React from "react";
import './surveycontent.css';

function SurveyContent(){
   
       
    
    return(

        <>
  <h1> Survey Form</h1>
  {/* Create Form */}
  <form id="form">
    {/* Details */}
    <div className="form-control">
      <label htmlFor="name" id="label-name">
        Name
      </label>
      {/* Input Type Text */}
      <input type="text" id="name" placeholder="Enter your name" />
    </div>
    <div className="form-control">
      <label htmlFor="email" id="label-email">
        Email
      </label>
      {/* Input Type Email*/}
      <input type="email" id="email" placeholder="Enter your email" />
    </div>
    <div className="form-control">
      <label htmlFor="age" id="label-age">
        Age
      </label>
      {/* Input Type Text */}
      <input type="text" id="age" placeholder="Enter your age" />
    </div>
    <div className="form-control">
      <label htmlFor="role" id="label-role">
        Which option best describes you?
      </label>
      {/* Dropdown options */}
      <select name="role" id="role">
        <option value="student">Student</option>
        <option value="intern">Intern</option>
        <option value="professional">Professional</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="form-control">
      <label>Would you recommend GeeksforGeeks to a friend?</label>
      {/* Input Type Radio Button */}
      <label htmlFor="recommed-1">
        <input type="radio" id="recommed-1" name="recommed" />
        Yes
      </label>
      <label htmlFor="recommed-2">
        <input type="radio" id="recommed-2" name="recommed" />
        No
      </label>
      <label htmlFor="recommed-3">
        <input type="radio" id="recommed-3" name="recommed" />
        Maybe
      </label>
    </div>
    <div className="form-control">
      <label>
        Languages and Frameworks known
        <small>(Check all that apply)</small>
      </label>
      {/* Input Type Checkbox */}
      <label htmlFor="inp-1">
        <input type="checkbox" name="inp" />C
      </label>
      <label htmlFor="inp-2">
        <input type="checkbox" name="inp" />
        C++
      </label>
      <label htmlFor="inp-3">
        <input type="checkbox" name="inp" />
        C#
      </label>
      <label htmlFor="inp-4">
        <input type="checkbox" name="inp" />
        Java
      </label>
      <label htmlFor="inp-5">
        <input type="checkbox" name="inp" />
        Python
      </label>
      <label htmlFor="inp-6">
        <input type="checkbox" name="inp" />
        JavaScript
      </label>
      <label htmlFor="inp-7">
        <input type="checkbox" name="inp" />
        React
      </label>
      <label htmlFor="inp-7">
        <input type="checkbox" name="inp" />
        Angular
      </label>
      <label htmlFor="inp-7">
        <input type="checkbox" name="inp" />
        Django
      </label>
      <label htmlFor="inp-7">
        <input type="checkbox" name="inp" />
        Spring
      </label>
    </div>
    <div className="form-control">
      <label htmlFor="comment">Any comments or suggestions</label>
      {/* multi-line text input control */}
      <textarea
        name="comment"
        id="comment"
        placeholder="Enter your comment here"
        defaultValue={"            "}
      />
    </div>
    {/* Multi-line Text Input Control */}
    <button type="submit" value="submit">
      Submit
    </button>
  </form>
</>


    )
    

}

export default SurveyContent;