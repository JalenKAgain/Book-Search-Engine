const typeDefs = `

  type User {

    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]

  }

   type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

   

   type Auth {
    token: ID!
    user:  User
  }

  type Query {
    me: User
  }

  # Important for useMutation: We define our Mutation type to inform our entrypoints

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String, email: String, password: String!): Auth
    saveBook(authors: [String], description: String, title: String, bookId: ID!, image: String, link: String): User input
    removeBook(bookId: ID!): User

  }
`;

export default typeDefs;
