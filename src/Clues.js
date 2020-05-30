import React, {useState} from 'react';
 
function Clues() {

    const [clueList] = useState("");

    return(
        <div>
            <div className="cluesContainer">
                {clueList}
            </div>
        </div>
    ) 
}
 
export default Clues;