
describe('Logs in all Netzon admin users ', () => {
    LoginPage.open();
    
    it('valdiates if user is in Login page', () => {
        expect(LoginPage.leftPanel).toHaveText("Välkommen!")

    });
    
    it('should login Netzon Admin with valid credentials', () => {
        LoginPage.login(process.env.STAGING_ADMIN_EMAIL, process.env.STAGING_ADMIN_PASS);
        HomePage.btnMenuProfile.click()
        
        expect(ProfilePage.profileName).toHaveText("Netzon Administrator")
        HomePage.logout()

    });

    it('should login Netzon SM with valid credentials', () => {
        LoginPage.login(process.env.STAGING_SM_EMAIL, process.env.STAGING_ADMIN_PASS);
        HomePage.btnMenuProfile.click()
        
        expect(ProfilePage.profileName).toHaveText("Netzon Store Manager")
        HomePage.logout()
    });
    
    it('should login Netzon Cashier with valid credentials', () => {
        LoginPage.login(process.env.STAGING_CASHIER_EMAIL, process.env.STAGING_ADMIN_PASS);
        HomePage.btnMenuProfile.click()
        
        expect(ProfilePage.profileName).toHaveText("Netzon Cashier")
        HomePage.logout()
    });
});


