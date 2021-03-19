const SignupPage = require('../../pages/auth/signup.page')
const LoginPage = require('../../pages/auth/login.page')
const ConsumerProfilePage = require('../../pages/home/profile-consumer.page')

const user = require('../../../data/consumer-info')

describe('As a consumer, I can register an account on web portal', () => {
    it('Should click Customer and Store Manager tabs', () => {
        SignupPage.open()
    })

    it('Should self-register as consumer', () => {
        SignupPage.signup(user, 'consumer')
    })

})

describe('As a consumer, I can login on web portal', () => { 
    it('Should login created consumer account', () => {
        LoginPage.login(user, 'consumer')
    })
})

describe('As a consumer, I can view and validate my details in Profile', () => {
    
    it('Should validate consumer details in Profile', () => {
        ConsumerProfilePage.validateConsumerDetails(user, false)
    })
})

describe('As a consumer, I can edit my details in Profile', () => {
    
    it('Should click edit button', () => {
        ConsumerProfilePage.iconEditProfile.click()
    })

    it('Should edit consumer details', () => {
        
        ConsumerProfilePage.editConsumerDetails(user)
    })
    it('Should validate consumer details', () => {
        
        ConsumerProfilePage.validateConsumerDetails(user, true)
    })
})