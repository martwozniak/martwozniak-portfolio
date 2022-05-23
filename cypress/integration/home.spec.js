/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should find home page with title", () => {
    cy.get("h1").contains("JavaScript");
  });
});
