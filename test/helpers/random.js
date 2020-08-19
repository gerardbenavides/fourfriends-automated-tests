class Random {
    
    email () {
        return chance.email({domain: "mailinator.com", length: 15})
    }
    firstName () {
        return chance.first()
    }
    lastName () {
        return chance.last()
    }
    phoneNumber () {
        return chance.phone({formatted: false})
    }
    address () {
        return chance.address()
    }
    zipCode () {
        return chance.zip()
    }
    city () {
        return chance.city()
    }
}

module.exports = new Random();
