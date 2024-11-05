import ComponentB from "./ComponentB";

const ComponentA = () => {
    return (
        <div>
            <ComponentB name={name} />
        </div>
    );
};

export default ComponentA;
