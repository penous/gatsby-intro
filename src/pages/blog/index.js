import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const Blog = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allMdx.nodes.map((node) => {
          return (
            <article key={node.id}>
              <h2>
                <Link to={node.slug}>{node.frontmatter.title}</Link>
              </h2>
              <p>{node.frontmatter.date}</p>
            </article>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default Blog;
