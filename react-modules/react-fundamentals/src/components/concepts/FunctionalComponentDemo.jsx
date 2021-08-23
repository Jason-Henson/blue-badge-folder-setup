

const FunctionalComponentDemo = (props) => {
    return ( 
        <div className="main">
            <div className="mainDiv">
                <h1>Functional Component</h1>
                    <p>Functional Components are the primary tool in React used to build a small, modual piece of your page.</p>
                    <dl>
                        <dt>Can use state</dt>
                            <dd>With the 'useState' hook, functional compoents can now both render a display to the page and update information to be shown.</dd>
                        <dt>No 'this' keyword</dt>
                            <dd>Older class components use they keyword 'this'. Functional components have no 'this' object.</dd>
                        <dt>Can use effects</dt>
                            <dd>With the 'useEffect' hook, funional components can perform side effect with any props or state changes.</dd>
                        <dt>return()</dt>
                            <dd>Must return a single element, but this element may have nested elements inside of it.</dd>
                    </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
                    <div></div>
            </div>            
        </div>
     );
}
 
export default FunctionalComponentDemo;