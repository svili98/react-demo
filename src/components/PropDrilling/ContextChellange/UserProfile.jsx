import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
    const { user } = useContext(UserContext);
    return <div>Welcome {user}</div>;
};

export default UserProfile;
