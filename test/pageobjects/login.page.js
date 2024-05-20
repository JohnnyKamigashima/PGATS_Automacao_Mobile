/**
 * sub page containing specific selectors and methods for a specific page
 */
const txtUser = $('android=new UiSelector().text("Usuário")')
const txtPassword = $('android=new UiSelector().text("Senha")')
const btnEnter = $('android=new UiSelector().text("ENTRAR")')
class LoginPage {
    /**
     * define selectors using getter methods
     */
    async inputUsername() {
        return await txtUser
    }

    async inputPassword() {
        return await txtPassword
    }

    async btnEnter() {
        return await btnEnter
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        // await inputUsername().setValue(username);
        // await inputPassword().setValue(password);
        // await btnEnter().click();
    }

}

export default LoginPage;
