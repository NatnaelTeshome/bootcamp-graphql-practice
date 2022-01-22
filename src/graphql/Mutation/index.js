const merge = require('lodash.merge')
const Book = require('./Book')
const Address = require('./Address')

const resolvers = [Book, Address]

module.exports = merge(...resolvers)
