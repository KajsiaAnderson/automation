const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const{addMovie, crossOffMovie, deleteMovie, unCross} = require('../functions/movieFunctions')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

// test add movie
test('add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(3000)
})

//  test crossing off a movie
test('cross off a movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(3000)
})

//  test the uncrossing off a movie
test('uncross off a movie', async () => {
    await unCross(driver)
    await driver.sleep(3000)
})

//  test deleting a movie
test('delete a movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(3000)
})

