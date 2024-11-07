import { StrictMode } from "react";
import DataProvider from "./components/PropDrilling/DataProvider";

const App = () => {
    return (
        <div>
            <StrictMode>
                <DataProvider />
            </StrictMode>
        </div>
    );
};

export default App;
