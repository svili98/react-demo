import { useReducer, useState } from "react";
import { counterReducer, initialState } from "./CounterReduce";

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => dispatch({ type: "increment" });
    const handleDecrement = () => dispatch({ type: "decrement" });

    const handleIncrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: +inputValue });
        setInputValue(0);
    };
    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: +inputValue });
        setInputValue(0);
    };

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

            <div>
                <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleIncrementByAmount}>Increment by value</button>
                <button onClick={handleDecrementByAmount}>Decrement by value</button>
            </div>
        </div>
    );
};

export default Counter;
