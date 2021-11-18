import React, { useState } from "react";

const MadlibForms = () => {
    const [state, setState] = useState(true);
    const [wordState, setwordState] = useState({});
    const handleChange = (e) => {
        setwordState({
            ...wordState,
            [e.target.name]: e.target.value
        });     
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setState(false);
    }
    const restart = () => {
        setState(true);
    }
    return (
        <div>
            {state && <form onSubmit={handleSubmit}>  
            <input type="text" name="noun" placeholder="noun" onChange={handleChange}/>
            <input type="text" name="noun2" placeholder="noun2" onChange={handleChange}/>
            <input type="text" name="adjective" placeholder="adjective" onChange={handleChange}/>
            <input type="text" name="color" placeholder="color" onChange={handleChange}/>
            <button>Get Story</button>
        </form>}
            {!state && <div><p>There was a {wordState.color} {wordState.noun} who loved a {wordState.adjective} {wordState.noun2}.</p> <button onClick={restart}>Restart</button></div>}
        </div>
    )
}

export default MadlibForms;