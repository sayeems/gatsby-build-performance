import React from "react";
import "../assets/css/main.css";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const singleProduct = (props) => {
  const {
    data: { wpProduct: product },
  } = props;
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>{product.name}</h1>
      <div className="singleImageContainer">
        <GatsbyImage
          image={product.image.localFile.childImageSharp.gatsbyImageData}
          alt={product.name}
        />
      </div>
      <Link to="/">All Products</Link>
    </div>
  );
};

export default singleProduct;

export const single = graphql`
  query singleProduct($slug: String) {
    wpProduct(slug: { eq: $slug }) {
      name
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;
