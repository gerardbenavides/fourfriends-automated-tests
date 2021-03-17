const random = require('../test/helpers/random')

module.exports = {
    email: random.email(),
    password: random.string(), 
    firstName: random.firstName(), 
    lastName: random.lastName(), 
    phoneNumber: random.phoneNumber(),
    address: random.address(),
    zipCode: random.zipCode(),
    city: random.city(),

    get firstNameEdited() {
        return this.firstName + "~"
    },
    get lastNameEdited() {
        return this.lastName + "~"
    },
    get phoneNumberEdited() {
        return this.phoneNumber + "~"
    },
    get addressEdited() {
        return this.address + "~"
    },
    get zipCodeEdited() {
        return this.zipCode + "~"
    },
    get cityEdited() {
        return this.city + "~"
    },

    dogBreed: "DOG " + random.string(),
    catBreed: "CAT " + random.string(),
    hunter: "HUNTER " + random.string(),
    quantity: 5,


}