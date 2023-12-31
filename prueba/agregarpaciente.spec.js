// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('agregar paciente', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('agregar paciente', async function() {
    await driver.get("https://guileless-clafoutis-3a9fa1.netlify.app/")
    await driver.manage().window().setRect(1057, 664)
    await driver.findElement(By.id("nombremascota")).click()
    await driver.findElement(By.id("nombremascota")).sendKeys("Rocky P")
    await driver.findElement(By.id("nombrepropietario")).sendKeys("Edward Frias")
    await driver.findElement(By.id("email")).sendKeys("edwardfrias7@gmail.com")
    await driver.findElement(By.id("telefonopropietario")).sendKeys("+18299878771")
    await driver.findElement(By.id("alta")).click()
    await driver.findElement(By.id("alta")).click()
    await driver.findElement(By.id("alta")).sendKeys("2023-12-14")
    await driver.findElement(By.id("sintomas")).click()
    await driver.findElement(By.id("sintomas")).sendKeys("Duerme mucho y no come.")
    assert(await driver.findElement(By.css(".bg-indigo-600")).getText() == "Seguimientos Pacientes Veterinaria")
  })
})
