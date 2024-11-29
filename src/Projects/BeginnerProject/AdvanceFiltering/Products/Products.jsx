import "./Products.css";
import Card from "../components/Card";
const Products = ({ result }) => {
    return (
        <>
            <section className="card-container">
                <Card result={result} />
            </section>
        </>
    );
};

export default Products;
