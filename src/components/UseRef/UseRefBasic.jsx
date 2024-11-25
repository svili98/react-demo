import { useRef } from "react";

const UseRefBasic = () => {
    const inputElement = useRef(null);
    console.log(inputElement);
    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "Focused";
    };

    return (
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}>Focus & Write </button>
        </div>
    );
};

export default UseRefBasic;
