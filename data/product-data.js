const random = require('../test/helpers/random')

module.exports = {

    sku: "9" + random.integer10(),
    ean: "9" + random.integer10(),
    name: "9_" + random.string(),
    description: random.paragraph(),
    groupName: "7GROUP_" + random.string(),

}