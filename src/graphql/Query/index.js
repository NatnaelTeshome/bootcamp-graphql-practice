const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Book = require('./Book')
const Publisher = require('./Publisher')
const Author = require('./Author')

const resolvers = [Welcome, Book, Publisher, Author]

module.exports = merge(...resolvers)
