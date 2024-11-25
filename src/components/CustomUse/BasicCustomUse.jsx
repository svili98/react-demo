import { useId } from "react";
import useFetch from "./useFetch";

const BasicCustomUse = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div>
            {data &&
                data.map((item) => {
                    return <p key={useId}>{item.title}</p>;
                })}
        </div>
    );
};

export default BasicCustomUse;
