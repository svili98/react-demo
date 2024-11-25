import { useEffect } from "react";
import { Data } from "./DataProvider";

const ComponentC = () => {
    const name = useEffect(Data);
    return <h1>my name is {name}</h1>;
};

export default ComponentC;
