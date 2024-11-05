import { useState } from "react";

const Profile = () => {
    const user = { name: "", age: 1 };

    const [curentUser, setUser] = useState(user);

    const onNameChange = (e) => {
        let newUserName = e.target.value;
        setUser((curentUser) => ({ ...curentUser, name: newUserName }));
    };

    const onAgeChange = (e) => {
        let newAge = e.target.value;
        setUser((curentUser) => ({ ...curentUser, age: newAge }));
    };

    const onSaveUser = (e) => {
        e.preventDefault();
        console.log("ok");
    };

    return (
        <div>
            <form onSubmit={onSaveUser}>
                <input type="text" placeholder="Insert name" onChange={onNameChange}></input>
                <input type="number" placeholder="Insert age" onChange={onAgeChange}></input>
                <button onClick="submit">Save</button>
            </form>

            <div>
                <label htmlFor="user-name"></label>
                <input value={curentUser.name}></input>

                <label htmlFor="user-age"></label>
                <input value={curentUser.age}></input>
            </div>
        </div>
    );
};

export default Profile;
