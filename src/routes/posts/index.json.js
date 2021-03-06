import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
  try {
    const query = gql`
      query Posts {
        posts {
          id
          title
          coverImage
          content
          author {
            name
          }
          tags
          slug
          createdAt
        }
      }
    `;
    const { posts } = await client.request(query);

    return {
      status: 200,
      body: { posts },
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'There was a server error.',
      },
    };
  }
};
