const random = require('../test/helpers/random')

module.exports = {
    email: random.email(),
    password: random.string(), 
    firstName: random.firstName(), 
    lastName: random.lastName(), 
    petType: "Cat", // temporary
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
        return this.phoneNumber + "0"
    },
    get addressEdited() {
        return this.address + "~"
    },
    get zipCodeEdited() {
        return this.zipCode + "0"
    },
    get cityEdited() {
        return this.city + "~"
    },

    petTypeEdited: "Both", // temporary
    dogBreed: "DOG " + random.string(),
    catBreed: "CAT " + random.string(),
    hunter: "HUNTER " + random.string(),
    quantity: 5,


}