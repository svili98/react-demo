import { useState } from "react";

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity)
        };

        setItems((prevItem) => [...prevItem, newItem]);
        setName("");
        setQuantity("");
    };

    return (
        <div>
            <h1>Your items</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <button type="submit">Finish</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {" "}
                        {item.name} - quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;
