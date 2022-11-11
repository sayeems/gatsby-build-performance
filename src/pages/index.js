import React from "react";
import { graphql, Link } from "gatsby";

const Index = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Gatsby Build Performance Test</h1>
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
