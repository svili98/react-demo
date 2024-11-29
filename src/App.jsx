// import Accordion from "./Projects/BeginnerProject/Accordion/Accordion";

import { useState } from "react";
import Nav from "./Projects/BeginnerProject/AdvanceFiltering/Navigation/Nav";
import Products from "./Projects/BeginnerProject/AdvanceFiltering/Products/Products";
import Recommended from "./Projects/BeginnerProject/AdvanceFiltering/Recommended/Recommended";
import Sidebar from "./Projects/BeginnerProject/AdvanceFiltering/Sidebar/Sidebar";
// import { accordionData } from "./Projects/BeginnerProject/Accordion/utils/content";

import products from "./Projects/BeginnerProject/AdvanceFiltering/db/data";
import Card from "./Projects/BeginnerProject/AdvanceFiltering/components/Card";

const App = () => {
    console.log(products);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const filteredItems = products.filter(
        (product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );

    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleClick = (e) => {
        setSelectedCategory(e.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        if (query) {
            filteredProducts = filteredItems;
        }

        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice == selected ||
                    title === selected
            );
        }

        return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
            <Card
                key={Math.random()}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                newPrice={newPrice}
                prevPrice={prevPrice}
            />
        ));
    }

    const result = filteredData(products, selectedCategory, query);

    return (
        // <div className="accordion">
        //     {accordionData.map(({ title, content }) => (
        //         <Accordion title={title} content={content} />
        //     ))}
        // </div>
        <>
            <Sidebar handleChange={handleChange} />
            <Nav query={query} handleInputChange={handleInputChange} />
            <Recommended handleChange={handleChange} />
            <Products result={result} />
        </>
    );
};

export default App;
