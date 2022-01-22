const Address = require('../../models/Address')

const addAddress = async (parent, {addressInput: {street, city, state, zip}}) => {
    try {
        console.log(street)
        const addAddress = await Address.query().insert({
            street,
            city,
            state, 
            zip
        }).returning('*')
        console.log(addAddress)
        return addAddress
    }
    catch (err) {
        throw new Error(err)
    }
}

const resolver = {
    Mutation: {
        addAddress,
    },
}

module.exports = resolver 