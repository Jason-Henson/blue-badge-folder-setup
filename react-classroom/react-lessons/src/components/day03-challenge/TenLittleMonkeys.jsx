import React, { useState } from 'react';

// have use state 
// have a button 
// function that when called will update the state of monkeysLeft
// once the monkeys = 0 we need ro update the displayu of the text

const TenLittleMonkeys = () => {
    
    const [monkey, setMonkey] = useState(10);

    function handleClick(e) {        
        // console.log("Button was clicked");
        setMonkey(monkey - 1)
    }

    function resetButton(e) {
        setMonkey(10)
    }
    
    return (
        <div>
            <p>
            {monkey > 0 ? <button onClick={handleClick}>Knock a monkey off the wall</button> : <p> All monkies have been knocked off the wall. The monkies are game...Would you like to try again? <br />  <button onClick={resetButton}>Reset</button>  </p> } <br />
            {monkey} monkies left on the wall.  Click the button to knock one off? 
                       
            </p>
        </div>
    )
}

export default TenLittleMonkeys;