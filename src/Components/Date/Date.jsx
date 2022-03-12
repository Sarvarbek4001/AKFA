import React from 'react'
import "./Date.scss"
export function Date(props) {
    
    return (
        <>
            {/* <div className="date-items"> */}
            <input className='input__date' type="date" placeholder='Date'
            // onFocus={(e)=>{
            //     e.preventDefault();
            //     e.target.type='date'
            //     document.getElementById("datepikcer").classList.add("date-picker-hide")
            // }}
            //   onBlur={(e)=>{
            //     document.getElementById("datepikcer").classList.remove("date-picker-hide")
            //     e.target.type='text'
            //   }}
              />
             {/* <span className='date-picker' id="datepikcer"></span> */}
            {/* </div> */}
        </>
    )
}
