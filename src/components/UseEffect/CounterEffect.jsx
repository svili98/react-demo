import { useEffect, useState } from "react";

const CounterEffect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = counter;
    }, [counter]);

    return (
        <section>
            <button onClick={() => setCounter((e) => e + 1)}>Increase</button>
            <h5>{counter}</h5>
        </section>
    );
};

export default CounterEffect;
