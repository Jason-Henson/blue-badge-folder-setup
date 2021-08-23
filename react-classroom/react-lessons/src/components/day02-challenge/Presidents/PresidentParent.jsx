import { presidentsArray } from "./presidents.constant";
import PresidentChild from "./PresidentChild";

function PresidentParent (props) { 
    
    // const filter = presidentArray.filter(() => ())

    // const filter = familyArray.filter((family) => (family.name))

    // const AllPresidents = presidentsArray.filter(function (p) {
    //     return p.first, p.last
    // })
    
    return (
    <div>
        Hello from president parent comp
        {presidentsArray.map((president) => (<PresidentChild first={president.first} last={president.last} />) )}
    </div>
    );
}
export default PresidentParent;