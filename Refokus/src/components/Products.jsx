import React from "react";
import Product from "./Product";

const Products = () => {
  var products = [
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates",
      live: true,
    },
    {
      title: "BCG Platinion",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
      live: true,
    },
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
    },
    {
      title: "TTR AI",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
    },
    {
      title: "Maniv",
      description:
      "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
    },
    {
      title: "Intenseye",
      description:
        "We focused on creating something beautiful while still ensuring the brand felt mature and contextual within their industry.",
      live: true,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
    },
    {
      title: "Rainfall",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
    },
  ];
  return (
    <div>
     {products.map((elem, index) => (
       <Product key={index} title={elem.title} description={elem.description} live={elem.live} />
     ))}
    </div>
  );
};

export default Products;
