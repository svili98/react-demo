import { useRef } from "react";

const FocusInput = () => {
    const inputElement = useRef(null);

    const handleFocusBtnClick = () => {
        inputElement.current.focus();
    };
    return (
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={handleFocusBtnClick}>Focus 🎯</button>
        </div>
    );
};

export default FocusInput;
