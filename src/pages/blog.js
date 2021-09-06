import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Blog = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allFile.nodes.map((node, i) => {
          return <li key={i}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`;

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `;

export default Blog;
