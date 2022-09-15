import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class JPet extends BasePage {
    loginBtn: By = By.xpath('//*[@id="MenuContent"]/a[2]')
    cartBtn: By = By.xpath('//*[@id="MenuContent"]/a[1]/img')
    searchBar: By = By.xpath('//*[@id="SearchContent"]/form/input[1]')
    searchBtn: By = By.xpath('//*[@id="SearchContent"]/form/input[2]')
    fishTab: By = By.xpath('//*[@id="QuickLinks"]/a[1]/img')
    homePage: By = By.xpath('//*[@id="BackLink"]/a')
    removeCart: By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[2]/td[8]/a')
    updateCart: By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[3]/td[1]/input')
    // updateCart: By = By.name('updateCartQuantities')
    results: By = By.xpath('//*[@id="Catalog"]/table')
    fishOne: By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[2]/td[1]/a')
    addCart: By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[2]/td[5]/a')
    registerBtn: By = By.xpath('//*[@id="Catalog"]/a')
    saveInfo: By = By.xpath('//*[@id="Catalog"]/form/input')
    removeBtn: By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[2]/td[8]/a')
    Qnty: By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[2]/td[5]/input')
    Subtotal: By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[3]/td[1]')
    shoppingCart: By = By.xpath('//*[@id="Cart"]')
    userID: By = By.name('username')
    newPass: By = By.xpath('//*[@id="Catalog"]/form/table[1]/tbody/tr[2]/td[2]/input')
    rePass: By = By.xpath('//*[@id="Catalog"]/form/table[1]/tbody/tr[3]/td[2]/input')
    firstName: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[1]/td[2]/input')
    lastName: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[2]/td[2]/input')
    email: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[3]/td[2]/input')
    phoneNum: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[4]/td[2]/input')
    address: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[4]/td[2]/input')
    city: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[7]/td[2]/input')
    state: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[8]/td[2]/input')
    zip: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[9]/td[2]/input')
    country: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[10]/td[2]/input')
    error: By = By.css('h1')
    searchResult: By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[2]/td[3]')

    constructor() {
        super({url: "https://petstore.octoperf.com/actions/Cart.action?viewCart="})
    }
    async search(searchTerm:string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }

    // async getTextOfRemoveButton() {
    //     return this.getText(this.backLink)
    }

    


