import { ProductSearchData } from "../ProductSearch/Data";
import { ProductPageLocators } from "../ProductPage/ProductPageLocators";
import {ProductPageData} from '../ProductPage/Data';

exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
  }

  //checkCategory Method
  async checkCategory() {
    for (let i = 0; i < 4; i++) {
    const itemLocator = page.locator(ProductPageLocators.similarItem1).nth(i);
    const textContent = await itemLocator.textContent();
    if (!textContent || !textContent.toLowerCase().includes(ProductSearchData.searchText)) {
      throw new Error(`Item ${i} does NOT contain the word "wallet". Found text: "${textContent}"`);
    } else {
      console.log(`Item ${i} contains the word "wallet": ${textContent}`);
    }
  }
  };

//checkPriceRange Method
  async checkPriceRange() {
  const priceText = await this.page.locator(ProductPageLocators.mainProductPrice).innerText();
  const cleanedPrice = priceText.replace(/[^0-9.,]/g, '').replace(/,/g, '');
  const priceValue = parseFloat(cleanedPrice);

  const minValueOfPriceRange = priceValue - priceValue * 0.2;
  const maxValueOfPriceRange = priceValue + priceValue * 0.2;

  for (let i = 0; i < 4; i++) {
    const itemPriceText = await itemPriceLocator.innerText();
    const cleanedItemPrice = itemPriceText.replace(/[^0-9.,]/g, '').replace(/,/g, '');
    const itemPriceValue = parseFloat(cleanedItemPrice);
    
    const itemPriceLocator = this.page.locator(ProductPageLocators.priceOfItem1).nth(i);

    if (itemPriceValue < minValueOfPriceRange || itemPriceValue > maxValueOfPriceRange) {
      throw new Error(`Price of item ${i} (${itemPriceValue}) is out of the expected range.`);
    } else {
      console.log(`Price of item ${i} is within range.`);
    }
  } 
};

//navigateToCoustomersUltimatelyBoughtSection Method
async navigateToCoustomersUltimatelyBoughtSection() {
    const targetLocator = this.page.locator(ProductPageLocators.customersUltimatelyBought);
    await targetLocator.scrollIntoViewIfNeeded();
    await targetLocator.waitFor({ state: 'visible' });
  };

//checkUptoSixProductsInBestSellers Method
async checkUptoSixProductsInBestSellers(){
  
}

//assertProductsNotFound Method
async assertProductsNotFound(){
  const productNotFound = await this.page.locator(ProductPageLocators.productNotFound).innerText();
  if (productNotFound == ProductPageData.productNotFoundTxt){
    console.log("No exact matches found");
  }else{
    throw new Error('Error in No exact matches found');
  }
}

}
