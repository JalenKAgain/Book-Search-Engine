const typeDefs = `

  type User {

    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]

  }

   type Book {
    bookId: 
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

   

   type Auth {
    token: 
    user:
  }

  type Query {
    User: [User]!
    user(userId: ID!): User
  }

  # Important for useMutation: We define our Mutation type to inform our entrypoints

  type Mutation {
    
  }
`;

export default typeDefs;
