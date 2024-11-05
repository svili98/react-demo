import { useState } from "react";

const Counter = () => {
    const [counterState, setState] = useState(0);
    const increase = () => {
        let t = counterState + 1;
        setState(t);
    };

    return (
        <div>
            <button onClick={increase}>Increase</button>
            <h1>{counterState}</h1>
        </div>
    );
};

export default Counter;
