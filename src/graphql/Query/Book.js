const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')

const books = async () => {
    try {
        const booksList = await Book.query()
        return booksList
    } catch(err) {
        throw new Error('Unable to get books')
    }
}

const author = async ({authorId}) => {
    try {
        const authorInfo = await Author.query().findById(authorId)
        console.log(authorInfo)
        return authorInfo
    } catch(err) {
        throw new Error(err)
    }
}

const publisher = async ({publisherId}) => {
    try {
        const publisherInfo = await Publisher.query().findById(publisherId)
        console.log(publisherInfo)
        return publisherInfo
    } catch(err) {
        throw new Error(err)
    }
}


const resolver = {
    Query: {
        books,
    },
    Book: {
        author,
        publisher,
    }
}

module.exports = resolver 