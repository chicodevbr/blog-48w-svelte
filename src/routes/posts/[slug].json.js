import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async req => {
  const slug = req.params.slug;
  try {
    const query = gql`
      query {
        slug(slug: "${slug}") {
          id 
          title 
          content 
          coverImage 
          slug 
          tags 
          author {
            name
          }
          createdAt
        }
      }
    `;
    //const variables = { slug };

    const post = await client.request(query);

    return {
      status: 200,
      body: { post },
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: 'There was a server error.' },
    };
  }
};
