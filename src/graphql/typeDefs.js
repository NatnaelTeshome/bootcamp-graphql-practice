const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
    createdAt: Date
    updatedAt: Date 
  }

  type Publisher {
    id: ID!
    company: String!
    phone: String
    numBooksPublished: Int!
    address: Address!
    createdAt: Date
    updatedAt: Date 
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address!
    createdAt: Date
    updatedAt: Date 
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: Date
    bestseller: Boolean
    author: Author
    publisher: Publisher
    createdAt: Date
    updatedAt: Date 
  }

  input addAddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input addPublisherInput {
    id: ID!
    company: String!
    phone: String
    numBooksPublished: Int!
    addressId: ID!
  }

  type Query {
    welcome: String!
    books: [Book!]!
    authors: [Author!]!
    authorById(id: ID!): Author!
    publishers: [Publisher!]!
    publisherByAddress(addressId: ID!): Publisher!
  }

  type Mutation {
    addAddress(addressInput: addAddressInput): Address!
    deleteBook(id: ID!): String!
  }

`
