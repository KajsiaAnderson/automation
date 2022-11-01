const{By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Batman')
    await driver.findElement(By.xpath('//button')).click()
    const movie = await driver.findElement(By.xpath('//li'))
    const displayed = movie.isDisplayed()
    expect(displayed).toBeTruthy()
}

const crossOffMovie = async (driver) => {
    const theElement = await driver.findElement(By.xpath('//span[text()="Batman"]'))
    await theElement.click()
    const theClass = await theElement.getAttribute('class')
    expect(theClass).toBe("checked")
}

const unCross = async (driver) => {
    const theElement = await driver.findElement(By.xpath('//span[text()="Batman"]'))
    await theElement.click()
    const theClass = await theElement.getAttribute('class')
    expect(theClass).toBe("")
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//button[text()="x"]')).click()
    expect(await driver.findElement(By.xpath("//aside[contains(text(),'deleted')]"))).toBeTruthy()

    //or this works too:
    // await driver.findElement(By.xpath('//button[text()="x"]')).click()
    // const list = await driver.findElement(By.xpath('//ul')).isDisplayed()
    // expect(list).toBeFalsy()
}




module.exports = {
    addMovie,
    crossOffMovie,
    unCross,
    deleteMovie
}

