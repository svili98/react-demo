import { createContext } from "react";
import ComponentA from "./ComponentA";

export const Data = createContext();

const DataProvider = () => {
    const name = "nikola";
    return (
        <div>
            <Data.Provider value={name}>
                <ComponentA />
            </Data.Provider>
        </div>
    );
};

export default DataProvider;
