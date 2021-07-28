/*

With the given array of username, build an input field that takes on a username and a button that fires off a search functionality filtering through the usernames in the username array. If the username exists, display it to the DOM in a p tag (You may build the p tag in your html file). 
Goals: build an input field and button that fire off a search functionality. The search functionality will filter through each username. If that username exists display it on the screen. 
Bonus: Have the search functionality NOT case sensitive. 

let username = ["technoKid997", "heyGurl94", "taebae55", "witchita"]; 

*/

let username = ["technoKid997", "heyGurl94", "taebae55", "witchita"]; 

const input = document.getElementById('txtInput');
const button = document.getElementById('btnSearch');

button.addEventListener("click", searchArray);

function searchArray (e) {
    e.preventDefault();
    userInput = input.value; 
    console.log(userInput); 
    const result = username.find(userInput); // need fuction keyword. 
    console.log(result); 
    // if(result != ''){
    //     document.createElement("p");
    // }
    }


    // *** instructor's solution *** 

    // function searchuserName() {
    //     let result = document.getElementById("search").value.toLowerCase();
    //     console.log(result);
    //     let username = ["technoKid997", "heyGurl94", "taebae55", "witchita"];
    //     let para = document.getElementById("paragraph");
    //     filteredUserList = username.filter((user) => 
    //         user.toLowerCase().includes(result)
    //     );
    //     filteredUserList.forEach((user) => {
    //         para.innerText = user;
    //     })
    // }