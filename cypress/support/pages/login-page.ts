export const loginPage = {
  visitLoginPage: () => cy.visit("/"),
  fillUsername: (username: string) => cy.get("#email").type(username),
  fillPassword: (password: string) => cy.get("#password").type(password),
  submitLoginDetails: () => cy.get('button[class="button button--accent"]').click(),
  checkLoginSuccess: () =>
    cy.get('h1[class="headline header__page-title headline-london"]').should("be.visible"),
  checkErrorMessage: (errorMessage: string) =>
    cy.get("div.error-placeholder").should("contain.text", errorMessage),
    
};
