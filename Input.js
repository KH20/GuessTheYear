import React, {useState} from 'react';


 
function Input() {

    const [year, setYear] = useState("");
    console.log(year);
    return(
        <div>
            <form>
                <label>
                    Year:
                </label>
                <input type="text" name="year" value={year} onChange={e => setYear(e.target.value)}></input>
            </form>
        </div>
    ) 
}
 
export default Input;