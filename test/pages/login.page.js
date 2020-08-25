const Page = require('./page');

class LoginPage extends Page {

    get inputEmail () { return $('//input[@type="email"]') }
    get inputPassword () { return $('//input[@type="password"]') }
    get btnSubmit () { return $('button[type="submit"]') }
    get leftPanel () { return $('//div[@class="left-container flex-center"]//span')}

    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    open () {
        return super.open('auth/login');
    }
}

module.exports = new LoginPage();
