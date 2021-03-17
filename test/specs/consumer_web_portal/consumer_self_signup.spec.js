const SignupPage = require('../../pages/auth/signup.page')
const LoginPage = require('../../pages/auth/login.page')
const ConsumerProfilePage = require('../../pages/home/profile_consumer.page')
const user = require('../../../data/consumer-info')

describe('As a consumer, I can register an account on web portal', () => {
    it('Clicks Customer and Store Manager tabs', () => {
        SignupPage.open()
    })

    it('Self-register as consumer', () => {
        console.log(user)
        SignupPage.signup(user, 'consumer')
    })

})

describe('As a consumer, I can login on web portal', () => {
    
    it('Logs in created consumer account', () => {
        LoginPage.login(user, 'consumer')
    })
})

describe('As a consumer, I can view and validate my details in Profile', () => {
    
    it('Validates consumer details in Profile', () => {
        ConsumerProfilePage.validateConsumerDetails(user)
    })

})

describe('As a consumer, I can edit my details in Profile', () => {
    
    it('Clicks edit button', () => {
        
        ConsumerProfilePage.iconEditProfile.click()
    })

    it('Edits consumer details', () => {
        
        ConsumerProfilePage.editConsumerDetails(user)
    })
})