export const homePage = {

    clickProjectMenu: () => {
        cy.get('[class="side-nav__main__item__icon"]').eq(1).click();
        //cy.reload();
    },

    clickAddProject: () => {
        
        cy.get('span[class="button__label"]', { timeout: 10000 }).should('be.visible');
        cy.get('span[class="button__label"]').eq(1).click(); 

    },

    enterProjectDetails: (name: string, des: string) => {
        cy.get('[class="input-field-input-wrapper__input"]', { timeout: 10000 }).should('be.visible');
        console.log(name);
        cy.get('[class="input-field-input-wrapper__input"]').type(name);
        //cy.get('#textarea-field-nameTextArea').type(des);
        cy.get('[class="button button--accent"]').click();
        
    },

    projectCreated: () => {

        cy.get('span[class="saved-project__headline__name__text"]').eq(0).should("be.visible");

    },

    ExtendCreatedProject:() =>{

        cy.get('span[class="saved-project__headline__name__text"]').eq(0).click();

    },

    ClickNewSimulation:()=>{
        cy.get('button[class="button button--accent button-icon saved-project__button--new-simulation]').eq(0).click();
    },

    enterSimuationDetails: (name: string) => {
        cy.get('[class="input-field-input-wrapper__input"]', { timeout: 10000 }).should('be.visible');
        console.log(name);
        cy.get('[class="input-field-input-wrapper__input"]').type(name);
        cy.get('[class="button button--accent button-icon settings-form__submit"]').click();
        
    },


};