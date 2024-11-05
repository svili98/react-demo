import { useState } from "react";

const TodoList = () => {
    const [todoItems, setItems] = useState([""]);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todoItems, inputValue);
        setItems([...todoItems, inputValue]);
    };

    const deleteItem = (index) => {
        setItems(todoItems.filter((_, i) => i !== index));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ime">Provide item</label>
                <input id="ime" onChange={handleChange}></input>
                <button type="submit">Dodaj</button>
            </form>

            <ol>
                {todoItems.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <i
                            onClick={() => {
                                deleteItem(index);
                            }}
                        >
                            X
                        </i>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
