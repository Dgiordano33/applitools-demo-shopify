/// <reference types="cypress" />


// --------------------------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------------------------

describe('Validating the product page', () => {

    it('should go to the product page', () => {

        cy.eyesOpen({
            appName: 'Applitools eCommerce Demo',
            testName: 'Product Page Validation',
        })

        loadProductsPage()
        verifyProductsPage()
    })

    afterEach(() => {
        cy.eyesClose()
    })
})


// --------------------------------------------------------------------------------
// Test Step Functions
// --------------------------------------------------------------------------------

function loadProductsPage() {
    cy.visit('http://localhost:8000/products/outdoors/gorgeous-cotton-computer/')
}

function verifyProductsPage() {
    cy.eyesCheckWindow({
        tag: "Products Page"
    });
}

