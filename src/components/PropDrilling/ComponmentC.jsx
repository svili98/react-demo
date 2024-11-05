import { Data } from "../../App";

const ComponmentC = () => {
    return (
        <Data.Consumer>
            {(name) => {
                return <h1>{name}</h1>;
            }}
        </Data.Consumer>
    );
};

export default ComponmentC;
