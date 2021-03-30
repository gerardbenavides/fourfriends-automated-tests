const random = require('../test/helpers/random')

module.exports = {
    name: random.string(), 
    priority: 1,
    petType: "Both",
    description: random.paragraph(),
    consumerReward: 10,
    breederReward: 20,
    hunterReward: 30,
    consumerCondition: 5,
    
    get nameEdited() {
        return this.name + "~"
    },
    get priorityEdited() {
        return this.priority + 1
    },
    get descriptionEdited() {
        return this.description + "~"
    },
    get consumerRewardEdited() {
        return this.consumerReward + 10
    },
    get breederRewardEdited() {
        return this.breederReward + 10
    },
    get hunterRewardEdited() {
        return this.hunterReward + 10
    },
    get consumerConditionEdited() {
        return this.consumerCondition + 5
    },

    petTypeEdited: "Dog",

    /** Campaign */
    maxAggregate: 20
}