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
    string () {
        return chance.string({ length: 15, casing: 'upper', alpha: true, numeric: true });
    }
}

module.exports = new Random();
