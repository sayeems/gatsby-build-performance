import React from "react";
import "../assets/css/main.css";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Index = (props) => {
  const {
    data: {
      allWpProduct: { nodes: products },
    },
  } = props;
  console.log(products[0]);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Gatsby Build Performance Test</h1>
      <div className="productsContainer">
        {products.map((product) => (
          <div className="singleProduct" key={product.slug}>
            <div className="imageContainer">
              <GatsbyImage
                image={product.image.localFile.childImageSharp.gatsbyImageData}
                alt={product.name}
              />
            </div>
            <div className="productDetails">
              <h4 className="title">{product.name}</h4>
              <p className="price">
                Price: <span className="value">$12</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

export const posts = graphql`
  query MyQuery {
    allWpProduct(limit: 200) {
      nodes {
        averageRating
        slug
        name
        image {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
