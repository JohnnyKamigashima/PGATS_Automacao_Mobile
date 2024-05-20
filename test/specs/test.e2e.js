import { expect } from '@wdio/globals'
// import Page from '../pageobjects/login.page.js'
// import LoginPage from '../pageobjects/login.page.js'

// const loginPage = new LoginPage()
// const page = new Page()

describe('Lojinha app', () => {
    it('deve realizar login na lojinha', async () => {
        // Arrange
        const txtHeader = $('android=new UiSelector().text("Lista de Produtos")')
        const txtUser = $('android=new UiSelector().resourceId("com.lojinha:id/editText").instance(0)')
        const txtPassword = $('android=new UiSelector().resourceId("com.lojinha:id/editText").instance(1)')
        const btnEnter = $('android=new UiSelector().resourceId("com.lojinha:id/button").instance(0)')
        const userName = 'admin'
        const password = 'admin'

        // Act
        await txtUser.waitForDisplayed()
        await txtUser.setValue(userName)
        await txtPassword.waitForDisplayed()
        await txtPassword.setValue(password)
        await btnEnter.waitForDisplayed()
        await btnEnter.click()

        // Assert
        await txtHeader.waitForDisplayed()
        const txtHeaderText = await txtHeader.getText()
        expect(txtHeaderText).toEqual('Lista de Produtos')
        driver.saveScreenshot('./screenshots/login.png')
    })
})

