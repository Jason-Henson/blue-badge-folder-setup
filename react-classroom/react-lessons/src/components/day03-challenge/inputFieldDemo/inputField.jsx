import React, { useState } from 'react';

const InputField = (props) => {
    const [username, setUsername] = useState(['']);
    
    function handleOnChange(e) {
        console.log(e.target.value);
        // username = e.target.value *** do not do this
        setUsername(e.target.value);
        console.log(username, 'this is the username value')
    }

    return ( 
        <div> 
            <p>Hello from input field</p>
            {/* *** must use dual binding in React see below !!! *** */}
            <input type="text" value={username} onChange={handleOnChange} />
        </div>
     );
}
 
export default InputField;