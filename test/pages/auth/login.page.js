const Page = require('../page')

class LoginPage extends Page {

    get inputEmail () { return $('//input[@type="email"]') }
    get inputPassword () { return $('//input[@type="password"]') }
    get btnSubmit () { return $('button[type="submit"]') }
    get leftPanel () { return $('//div[@class="left-container flex-center"]//span')}

    login (credentials, type) {
        let email = ''
        let password = ''

        switch(type) {
            case 'admin':
                email = credentials.admin.email
                password = credentials.admin.password
                break
            case 'manager':
                email = credentials.manager.email
                password = credentials.manager.password
                break
            case 'cashier':
                email = credentials.cashier.email
                password = credentials.cashier.password
                break
            case 'consumer':
                email = credentials.consumer.email
                password = credentials.consumer.password
                break
        }

        console.log(email, password)
        this.inputEmail.setValue(email)
        this.inputPassword.setValue(password)
        this.btnSubmit.click()
    }

    open () {
        return super.open('auth/login')
    }
}

module.exports = new LoginPage()
