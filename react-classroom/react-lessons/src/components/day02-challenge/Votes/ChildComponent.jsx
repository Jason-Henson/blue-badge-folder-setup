function ChildComponent (props) {
    // final OUtput: Abe Lincoln had a total vote count of 13033
    const { name, count } = props.votes; 
    return (
    <div>
        {name} had a total vote count of {count}.
    </div>
    );
};

export default ChildComponent;