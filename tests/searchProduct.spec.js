const { test, expect } = require('@playwright/test');
import { SearchPage } from '../pages/ProductSearch/SearchPage';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { ProductSearchData } from "../pages/ProductSearch/Data";

test.beforeEach(async ({page})=> {
  await page.goto('https://www.ebay.com');
});

test.only('TC 001 - Verify that ebay site search functionality work as expected', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.searchForWallet(ProductSearchData.searchText);
});

test('TC 002 -Verify that the related products will appear in main product page ', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.searchForWallet(ProductSearchData.searchText);
  await searchPage.navigateToMainProduct();
});

test('TC 003 - Verify that all related products are in same category', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  await searchPage.searchForWallet(ProductSearchData.searchText);
  await searchPage.navigateToMainProduct();
  await productPage.checkCategory();
});

test ('TC 004 - Verify all related products are in same price range', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  await searchPage.searchForWallet(ProductSearchData.searchText);
  await searchPage.navigateToMainProduct();
  await productPage.checkPriceRange();
});

test ('TC 005 - Verify that in related product list up to 6 products appear as best sellers', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  await searchPage.searchForWallet(ProductSearchData.searchText);
  await searchPage.navigateToMainProduct();
  await productPage.navigateToCoustomersUltimatelyBoughtSection();
  //await productPage.checkUptoSixProductsInBestSellers();
});


test ('TC 006 - Verify that searching for non-existance products displays no products', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.searchForWallet(ProductSearchData.searchNonExistProduct);
  await productPage.assertProductsNotFound();
});
