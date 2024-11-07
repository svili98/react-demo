import { StrictMode } from "react";
import UserProfile from "./components/PropDrilling/ContextChellange/UserProfile";
import { UserProvider } from "./components/PropDrilling/ContextChellange/UserContext";

const App = () => {
    return (
        <div>
            <StrictMode>
                <UserProvider>
                    <UserProfile />
                </UserProvider>
            </StrictMode>
        </div>
    );
};

export default App;
