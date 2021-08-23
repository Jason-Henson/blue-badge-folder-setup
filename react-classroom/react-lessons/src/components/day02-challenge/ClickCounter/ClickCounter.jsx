import React, { useState } from 'react';

const ClickCounter = (props) => {
    // let count = 0;

    const [count, setCount] = useState(0)

    function handleClick(e) {
        
        // console.log("Button was clicked");
        setCount(count + 2)
    }

    return ( 
        <div>
            {count < 10 ? <button onClick={handleClick}>Click Me</button> : <p>You clicked too many times dumbass</p> }
            <p>Current Count: {count}</p>
                { count> 9 ? <p>You clicked too many times dumbass</p> : null }
        </div> );
    }
 
export default ClickCounter;