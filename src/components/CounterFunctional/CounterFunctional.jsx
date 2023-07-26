import { useState } from "react";

const CounterFunctional = (props) => {
    const [counter, setCounter] = useState(props.initialValue);

    const increment = () => {
        setCounter(counter + props.numIncre);
    };

    const decrement = () => {
        setCounter(counter - props.numDecre);
    };

    return <div>
    <div>CounterFunctional: {counter}</div>
    <button onClick={decrement}>CounterFunctional - decrement</button>
    <button onClick={increment}>CounterFunctional + increment</button>
    </div>
};

export default CounterFunctional;