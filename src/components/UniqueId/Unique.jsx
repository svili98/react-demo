import { useId } from "react";

const Uniqe = () => {
    const id = useId();

    return (
        <div>
            <label htmlFor={`${id}-p`}>Email</label>
            <input type="email" id={`${id}-p`} />

            <br />

            <label htmlFor={`${id}`}>pass</label>
            <input type="password" id={`${id}`} />
        </div>
    );
};

export default Uniqe;
