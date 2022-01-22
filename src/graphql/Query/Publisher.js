const Address = require('../../models/Address')
const Publisher = require('../../models/Publisher')

const publishers = async () => {
    try {
        const publishersList = await Publisher.query()
        return publishersList
    } catch(err) {
        throw new Error('Unable to get publishers')
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

const publisherByAddress = async (obj, {addressId}) => {
    try {
        const publisherInfo = await Publisher.query().findOne('addressId', addressId)
        return publisherInfo
    }
    catch(err) {
        throw new Error(err)
    }
}

const resolver = {
    Query: {
        publishers,
        publisherByAddress,
    },
    Publisher: {
        address,
    }
}

module.exports = resolver 