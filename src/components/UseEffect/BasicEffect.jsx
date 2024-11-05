import { useEffect } from "react";

function BasicEffect() {
    useEffect(() => {
        console.info("Welcome!");
    }, []);
    return <div>BasicEffect</div>;
}

export default BasicEffect;
