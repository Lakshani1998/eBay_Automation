import { SearchPageLocators } from "../ProductSearch/SearchPageLocators";
import { expect } from "@playwright/test";

exports.SearchPage = class SearchPage {
  constructor(page) {
    this.page = page;
  }

  //searchForWallet Method
  async searchForWallet(product) {
    await this.page.locator(SearchPageLocators.searchFld).click();
    await this.page.locator(SearchPageLocators.clickedSearchFld).fill(product);
    await this.page.locator(SearchPageLocators.searchBtn).click();
    await expect(this.page.locator(SearchPageLocators.resultPageInspect)).toBeVisible({ timeout: 3000 });
    console.log("Serch Results appear");
  };

  //navigateToMainProduct Method
  async navigateToMainProduct() {
    const productDescription = await this.page.locator(SearchPageLocators.productDescription).innerText();
    console.log("Product description in Search Page : " + productDescription);

    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"), // Wait for new tab
      this.page.locator(SearchPageLocators.firstProduct).click(), // Trigger tab open
    ]);

    await newPage.waitForLoadState(); // Wait for new tab to finish loading
    const mainProductDescription = await this.page.locator(SearchPageLocators.mainProductDescription).innerText();
    console.log("Product description in Search Page : " + mainProductDescription);

    await new Promise(resolve => setTimeout(resolve, 5000));
      await this.page.locator(SearchPageLocators.similarItems).scrollIntoViewIfNeeded();
      await expect(this.page.locator(SearchPageLocators.similarItems)).isVisible();
      await expect(SearchPageLocators.relatedProductView).isVisible();
    console.log("Related Products are Visible in main page");

  }
};
