import { useState, useEffect } from "react";

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await respone.json();

            if (data && data.length) {
                setData(data);
            }
        }

        getData();
    }, []);

    return (
        <div>
            <ul>
                {data.map((todo) => (
                    <section key={todo.id}>
                        <li>{todo.title}</li> <br />
                        <li>Body - {todo.body}</li>
                    </section>
                ))}
            </ul>
        </div>
    );
};

export default Data;
