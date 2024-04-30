const typeDefs = `#graphql
  type User {
    id: ID!
    user_name: String!
    email: String!
    age: Int!
}
  
  input NewUserInput {
    user_name: String!
    email: String!
    age: Int!
  }
  type Query {
    users: [User]
  }
  type Mutation {
    createUser(input: NewUserInput!): User
  }
`;

export default typeDefs;
