const Book = require('../../models/Book')

const deleteBook = async (obj, {id}) => {
    try {
        const deletedBook = await Book.query().delete().where('id', id).returning('*')
        console.log(deletedBook[0].title)
        return `The book ${deletedBook[0].title} has been deleted`
    }
    catch (err) {
        throw new Error(err)
    }
}


const resolver = {
    Mutation: {
        deleteBook,
    },
}

module.exports = resolver 