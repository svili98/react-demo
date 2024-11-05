import { useEffect, useState } from "react";

const FetchDataEffect = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            const responseData = await response.json();

            if (responseData && responseData.length) {
                setData(responseData);
            }
        }

        getData();
    }, []);

    return (
        <div>
            <ol>
                {data.map((posts) => (
                    <li key={posts.id}>posts.title</li>
                ))}
            </ol>
        </div>
    );
};

export default FetchDataEffect;
