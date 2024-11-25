import { useState } from "react";
import "./style.css";

function generateId() {
    return Math.floor(Math.random() * 10);
}

const TodoProject = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        console.log(todos, input);
        if (input) {
            setTodos((todos) => {
                return todos.concat({
                    text: input,
                    id: generateId()
                });
            });
            setInput("");
        } else {
            alert("Empty!");
        }
    };

    const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id));

    return (
        <div className="container">
            <input type="text" placeholder="New Todo" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map(({ text, id }) => (
                    <li className="todo" key={id}>
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoProject;
