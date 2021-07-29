import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
  const chromedriver = require("chromedriver");
  
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  
  class BggPage {
    driver: WebDriver;
    url: string = "https://boardgamegeek.com/";
    headerLogo: By = By.className("menu-logo-symbol");
    searchBar: By =  By.name("searchTerm");
    gamePageName: By = By.xpath("//h1/a");
    gamePageRating: By =  By.css('[ng-show="showRating"]');
    constructor(driver: WebDriver) {
      this.driver = driver;
    }
    async navigate() {
      await this.driver.get(this.url);
      await this.driver.wait(until.elementLocated(this.headerLogo));
      await this.driver.wait(
        until.elementIsVisible(await driver.findElement(this.headerLogo))
      );
    }
    async getResultNameLink(name: string) {
      let xpathToFind = `//div[@id='maincontent']//a[text()='${name}']`;
      await this.driver.wait(until.elementLocated(By.xpath(xpathToFind)));
      return await this.driver.findElement(By.xpath(xpathToFind));
    }
  }
  
  const bgg = new BggPage(driver);
  
  describe("BoardGameGeek.com", () => {
    jest.setTimeout(15000);
    beforeEach(async () => {
      await bgg.navigate();
    });
    afterAll(async () => {
      await driver.quit();
    });
    test("the page loads", async () => {
      await driver.wait(until.elementLocated(bgg.headerLogo));
      expect(await driver.findElement(bgg.headerLogo).getAttribute("alt")).toBe(
        "boardgame geek logo"
      );
    });
    test("I can search for a game and open the page", async () => {
      await driver.wait(until.elementLocated(bgg.searchBar));
      await driver.findElement(bgg.searchBar).sendKeys("Gloomhaven\n");
      await (await bgg.getResultNameLink("Gloomhaven")).click();
      await driver.wait(until.elementLocated(bgg.gamePageName));
      expect(await (await driver.findElement(bgg.gamePageName)).getText()).toBe(
        "Gloomhaven"
      );
    });
    test("terraforming mars has a better rating than apples to apples", async () => {
      await driver.get(
        "https://boardgamegeek.com/boardgame/167791/terraforming-mars"
      );
      await driver.wait(until.elementLocated(bgg.gamePageName));
      let tmRating = parseFloat(
        await (await driver.findElement(bgg.gamePageRating)).getText()
      );
      await driver.get("https://boardgamegeek.com/boardgame/74/apples-apples");
      await driver.wait(until.elementLocated(bgg.gamePageName));
      let ataRating = parseFloat(
        await (await driver.findElement(bgg.gamePageRating)).getText()
      );
      expect(tmRating).toBeGreaterThan(ataRating);
    });
  });