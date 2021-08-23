import React, { useState } from 'react';

const Calculator = (props) => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(0);

    function handleOnChange1(e) {
        // use the + to convert from stirng to int
        setNumber1(+e.target.value);              

    }

    function handleOnChange2(e) {

        setNumber2(+e.target.value);              

    }

    function handleClick(e) {
        setTotal (number1 + number2);
    }

    return ( 
        <div>
            <p>
                <input type="number" value={number1} name="number1" onChange={handleOnChange1} /> <br />
                <input type="number"  value={number2} name="number2" onChange={handleOnChange2} /> <br />
                <button onClick={handleClick}>Add Numbers</button>
                <div>
                    The sum is: {total}. 
                </div>
            </p>
        </div>
     );
}
 
export default Calculator;