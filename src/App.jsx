import { createContext } from "react";
import ComponentA from "./components/PropDrilling/ComponentA";

export const Data = createContext();

const App = () => {
    const name = "n2";

    return (
        <div>
            <Data.Provider value={name}>
                <ComponentA />
            </Data.Provider>
        </div>
    );
};

export default App;
