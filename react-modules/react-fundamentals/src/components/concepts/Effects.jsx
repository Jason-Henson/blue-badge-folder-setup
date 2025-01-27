import React, { useEffect, useState } from 'react';

const Effects = (props) => {
    return ( 
        <div className="main">
            <div className="mainDiv"></div>
                <h2>Below are some important points regarding effects:</h2>
                <ul>
                    <li>The are triggered with state and prop updates, as well as inital render to the DOM</li>
                    <li>Effects are used to trigger certain actions based upon changes to the component</li>
                    <li>Effects can return cleanup functions, which can clean up timers using memory, listeners to outside AIPs , and other functions which may user systems resources</li>
                </ul>
                <SampleEffect />
                <br />
                <SampleEffect />
        </div>
     );
};
 
export default Effects;


const SampleEffect = () => {
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
            let timer;
            if(!timerRunning){
                timer = window.setTimeout(() => {
                    console.log('the timer expired', Date.now()/1000);
                    setTimerRunning(false);
                }, 2000)
            }
        }
    );

    let buttonHandler = () => {
        if(timerRunning){
            setTimerRunning(true);
        }
    };

    return (
        <div style={{ border: '1px dashed black' }}>
            <h2>This component demos an effect</h2>
            <button onClick={buttonHandler} >Click me to start an effect in the console</button>
        </div>
     );
};


 
