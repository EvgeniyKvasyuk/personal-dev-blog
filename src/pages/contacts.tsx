import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'src/components/Layout';

import { AboutPageQuery } from '../../graphql-types';

type Props = {
  data: AboutPageQuery,
};

export default ({ data }:Props) => {
  const html = data?.markdownRemark?.html;

  return (
    <Layout>
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </Layout>
  );
};

export const articleQuery = graphql`
  query ContactsPage {
    markdownRemark(frontmatter: {title: {eq: "Contacts"}}) {
      ...Page
    }
  }
`;
