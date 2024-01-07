describe("Egyszerű webteszt a Cypress-sel", () => {
  it("létezik a szöveg", () => {
    cy.visit("https://www.lipsum.com");

    cy.contains("Lorem").should("exist");
    cy.contains("Ipsum").should("exist");
  });

  it("navigáció", () => {
    cy.visit("https://www.lipsum.com");

    cy.contains("Generate").click();
    cy.url().should("include", "/feed");
  });

  it("űrlap", () => {
    cy.visit("https://www.lipsum.com");

    cy.get("#amount").type("15");

    cy.get("form").submit();

    cy.contains("Generated").should("exist");
  });
});
