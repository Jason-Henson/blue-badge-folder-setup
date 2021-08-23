// president child is responsible for displaying the information

// president parent is responsible for using the map feature and have it call the child

// bronse: see if you can display all the presidents first and last name buy using map

// silver: create a filtered array so that the child will only display the predents that are alive.  

// gold: display all preidents that have died and display the age that they did die 

function PresidentChild (props) {

    return (    
         
    <div>
        <p>
            {props.first} {props.last}
        </p>
{/* 
        <p>
            Silver: This is a list of all living U.S. presedents: {   }
        </p>

        <p>
            Gold: This is a list of all dead U.S. presidents and the age they died at: {   }
        </p> */}
    </div>
    );
};

export default PresidentChild;