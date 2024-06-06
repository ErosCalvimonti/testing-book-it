describe("Select Argentina hotels", () => {
    beforeEach(() => {
        cy.visit("https://eroscalvimonti.github.io/book-it/")
    })
    it("Verification of the cards", () => {
        cy.get(".hotel__image").should("be.visible")
    })
    it("Select Argentina hotels", () => {
        cy.get(".hotel__image").should("be.visible")
        cy.get(".filter__country").select("Chile")
        cy.contains(".buttons__filter", "Search").click()
    })
    it("Clear the cards", () => {
        cy.contains(".buttons__filter", "Clear").click()
    })
})
