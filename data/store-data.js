module.exports = {
    name: random.string(),
    city: random.city(),
    number: random.integer6(),

    get nameEdited() {
        return this.name +"~"
    }
}