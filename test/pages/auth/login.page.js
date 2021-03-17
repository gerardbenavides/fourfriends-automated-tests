const Page = require('../page')

class LoginPage extends Page {

    get inputEmail () { return $('//input[@type="email"]') }
    get inputPassword () { return $('//input[@type="password"]') }
    get btnSubmit () { return $('button[type="submit"]') }
    get leftPanel () { return $('//div[@class="left-container flex-center"]//span')}

    login (user, userType) {
        let email = ''
        let password = ''

        switch(userType) {
            case 'admin':
                email = user.admin.email
                password = user.admin.password
                break
            case 'manager':
                email = user.manager.email
                password = user.manager.password
                break
            case 'cashier':
                email = user.cashier.email
                password = user.cashier.password
                break
            case 'consumer':
                email = user.email
                password = user.password
                break
        }

        this.inputEmail.setValue(email)
        this.inputPassword.setValue(password)
        this.btnSubmit.click()
    }

    open () {
        return super.open('auth/login')
    }
}

module.exports = new LoginPage()
