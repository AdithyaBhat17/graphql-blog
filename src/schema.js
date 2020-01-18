import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

    type Post {
        _id: ID!
        title: String!
        author: String!
        description: [String]
    }

    type Query {
        getPost (_id: ID!): Post
        allPosts: [Post]
    }

    input PostInput {
        title: String!
        author: String!
        description: [String]
    }

    type Mutation {
        createPost (post: PostInput): Post
        editPost (_id: ID!, post: PostInput): Post
        deletePost (_id: ID!): Post
    }

`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;