"use client";
import { useState } from "react";
import Image from "next/image";
import Arian from "@/../../public/still-quote-Arian.webp";
import Amanda from "@/../../public/still-quote-Amanda.webp";
import Paul from "@/../../public/still-quote-Paul.webp";
import "./testimonials.css";

interface Testimonial {
  image: any;
}

const testimonials: Record<string, Testimonial> = {
  Arian: {
    image: Arian,
  },
  Amanda: {
    image: Amanda,
  },
  Paul: {
    image: Paul,
  },
};

const Testimonials: React.FC = () => {
  const [selected, setSelected] = useState<string>("Arian");
  const { image } = testimonials[selected];

  return (
    <div className="testimonial-main">
      <div className="testimonial-left">
        <div className="testimonial-image" style={{height: '80%'}}>
          <Image src={image} alt="image" layout="fill" style={{borderRadius: '9px'}} />
        </div>
        <div className="testimonial-selector">
          {Object.keys(testimonials).map((key) => (
            <button
              key={key}
              className={selected === key ? "active" : ""}
              onClick={() => setSelected(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="testimonial-right">
        <div className="testimonial-header">Find out why we’re better.</div>
        <button className="testimonial-button">See all our stories</button>
        <p className="testimonial-rating">
          <span className="testimonial-trustpilot">Trustpilot</span> Excellent{" "}
          <span className="testimonial-score">4.3 out of 5</span>
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
