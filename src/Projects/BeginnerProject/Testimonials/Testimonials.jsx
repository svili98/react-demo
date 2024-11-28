import { useState } from "react";
import "./style.css";

const Testimonials = () => {
    const [currentIndex, setCurrrentIndex] = useState(0);
    const testimonials = [
        {
            quote: "This is the beest product I' ve ever used!",
            author: "Jane Doe"
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith"
        },
        {
            quote: "I highqewrqly recommend this product to everyone!",
            author: "John Smith"
        }
    ];

    const handlePrevClick = () => {
        setCurrrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    };

    const handleNextClick = () => {
        setCurrrentIndex((currentIndex + 1) % testimonials.length);
    };

    return (
        <div className="testimonials">
            <div className="testimonials-quote">{testimonials[currentIndex].quote}</div>
            <div className="testimonials-author">{testimonials[currentIndex].author}</div>
            <div className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
};

export default Testimonials;
