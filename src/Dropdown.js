import { useState } from "react";
const Dropdown=()=>{

    const [isActive,setActive]=useState(false); 
    const [list]=useState(['Yes','Probably not']);
    const [value,setValue]=useState('');

    const onMouseHover  =  () => {
        setActive(true);
    }


    const onClickHandeler = (e) => {
        setValue(e.target.textContent);
        setActive(false);
    }


    const arrays = list.map((result,i) => {
        return<h3 style={{border: '1px solid black',borderRadius:'5px',backgroundColor:'white',cursor:'pointer'}} onClick={onClickHandeler}>{result}</h3> ;
    })


    return(

     <div className="dropdown">
        <h1>Should you use a dropdown?</h1>
        <h3>{value}</h3>
        <button className="btn" onMouseEnter={onMouseHover}>Select</button>
        <div className="dropdown-container" style={{display:`${isActive?'block':'none'}`}}>
          {arrays}
        </div>
     </div>
    );
    
    
}

export default Dropdown;