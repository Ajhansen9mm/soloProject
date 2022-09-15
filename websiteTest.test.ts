import {JPet} from './classObjects'

const JP = new JPet()



test('Can users use the search bar to find products', async () => {
 
    await JP.navigate()
    await JP.click(JP.searchBar)
    await JP.setInput(JP.searchBar, 'Golden Retriever')
    await JP.click(JP.searchBtn)
    await JP.driver.sleep(2000)
    await JP.driver.takeScreenshot().then(
        function(image) {
            require('fs').writeFileSync('searchResults.screenshot.png', image, 'base64')})
    
   expect(await JP.getText(JP.searchResult)).toContain("Golden Retriever")


})

test('Can users add items to shopping cart', async () => {
    await JP.navigate()
    await JP.click(JP.fishTab)
    await JP.click(JP.fishOne)
    await JP.click(JP.addCart)
    await JP.click(JP.updateCart)
    
    await JP.driver.takeScreenshot().then(
            function(image) {
                require('fs').writeFileSync('addtoCart.screenshot.png', image, 'base64')})

    expect(await JP.getText(JP.Subtotal)).toContain("Sub Total")
   
    
    
    
    
    }) 

    test('Users will get an error message if correct information is entered in account creation', async () =>{
        await JP.navigate()
        await JP.click(JP.loginBtn)
        await JP.click(JP.registerBtn)
        await JP.setInput(JP.userID, "PapaBurgundy")
        await JP.setInput(JP.newPass, 'abcd123')
        await JP.setInput(JP.rePass, 'abcd123')
        await JP.setInput(JP.firstName, 'Ron')
        await JP.setInput(JP.lastName, 'Burgundy')
        await JP.setInput(JP.email, 'PapaBurgundy@aol.com')
        await JP.setInput(JP.phoneNum, '858-867-5309')
        await JP.setInput(JP.address, '2736 Worden St')
        await JP.setInput(JP.city, 'San Diego')
        await JP.setInput(JP.state, 'CA')
        await JP.setInput(JP.zip, '92110')
        await JP.setInput(JP.country, 'USA')
        await JP.click(JP.saveInfo)
        await JP.driver.sleep(5000)
        await JP.driver.takeScreenshot().then(
                function(image) {
                    require('fs').writeFileSync('loginError.screenshot.png', image, 'base64')})
       
        expect(await JP.getText(JP.error)).toContain("Error")
        
        await JP.driver.quit()
            
    
        

    })

