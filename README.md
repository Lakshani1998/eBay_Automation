# eBay Test Automation

## Project Overview
 This automation project is developed to test the functionality of provided senario

## Senario for automation
Assume that as a shopper on eBay, you are going to buy a wallet. After searching for
the main product, you will be able to see the main product. In the main product page, I
would like to see a list of related products that are best sellers. Related products should
be the same category as the main searched product. Those will be in the same price
range. Up to six products will appear as best seller products. (Refer the below
attachment)

## Features Tested
- Product search functionality
- Navigation to the main product detail page
- Validation of category and price range consistency
- Verification of a maximum of 6 best seller items

## Test Cases Derived
TC 001 - Verify that the eBay website search functionality works as expected
TC 002 - Verify related products appear in main product page 
TC 003 - Verify all related products are in same category
TC 004 - Verify all related products are in same price range
TC 005 - Verify that in related products list up to six products appear as best sellers
TC 006 - Verify that searching for a non-existent product displays no products

## Technologies used
    Playwright 
    JavaScript

## How to run
1. Get a clone from below git repository 

<-----git repo link---------->

2. Install playwright using below command
        npm init playwright@latest

3. Use following commads to run the project 

Run in debug mode in chrome browser: 
    npx playwright test --project=chromium --debug

Run in headed mode in chrome browser : 
    npx playwright test --project=chromium --headed

Run all : 
    npx playwright test 

## Notes
Since I've getting error when loading the ebay main product page, all the test scripts couldn't be tested

Error : "Checking your browser before you access eBay. Your browser will redirect content shortly. Please wait..."

