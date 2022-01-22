const Address = require('../../models/Address')
const Author = require('../../models/Author')

const authors = async () => {
    try {
        const authorsList = await Author.query()
        return authorsList
    } catch(err) {
        throw new Error('Unable to get authors')
    }
}

const address = async ({addressId}) => {
    try {
        const addressInfo = await Address.query().findById(addressId)
        console.log(addressInfo)
        return addressInfo
    } catch(err) {
        throw new Error(err)
    }
}

const authorById = async (obj, {id}) => {
    try {
        const authorInfo = await Author.query().findOne('id', id)
        return authorInfo
    }
    catch(err) {
        throw new Error(err)
    }
}

const resolver = {
    Query: {
        authors,
        authorById,
    },
    Author: {
        address,
    }
}

module.exports = resolver 