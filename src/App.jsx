// import Accordion from "./Projects/BeginnerProject/Accordion/Accordion";

import Nav from "./Projects/BeginnerProject/AdvanceFiltering/Navigation/Nav";
import Products from "./Projects/BeginnerProject/AdvanceFiltering/Products/Products";
import Recommended from "./Projects/BeginnerProject/AdvanceFiltering/Recommended/Recommended";
import Sidebar from "./Projects/BeginnerProject/AdvanceFiltering/Sidebar/Sidebar";
// import { accordionData } from "./Projects/BeginnerProject/Accordion/utils/content";
const App = () => {
    return (
        // <div className="accordion">
        //     {accordionData.map(({ title, content }) => (
        //         <Accordion title={title} content={content} />
        //     ))}
        // </div>
        <>
            <Sidebar />
            <Nav />
            <Recommended />
            <Products />
        </>
    );
};

export default App;
