///<reference types="cypress"/>

describe('FitPeo Revenue Calculator', function () {
    beforeEach(() => {
        cy.visit('https://www.fitpeo.com/')
        cy.get('[href="/revenue-calculator"]').click({ force: true })
    });

    it('should navigate to the Revenue Calculator Page and adjust the slider correctly', () => {
        cy.get('[class="MuiBox-root css-79elbk"]').scrollIntoView()
        let value = 820
        cy.sliderValue('[aria-orientation="horizontal"]', value)
        cy.get('[type="number"]').should('have.value','820')
        cy.get('input[data-index="0"]').should('have.attr','value','820')
    });

    it('should update the text field to 560 and reflect on the slider', () => {
        cy.get('[class="MuiBox-root css-79elbk"]').scrollIntoView()
        cy.get('[type="number"]').clear().type('560').should('have.value', '560');
        cy.get('[type="range"]').should('have.value', '560')
    });

    it('should select the CPT codes and validate the total reimbursement', () => {
        cy.get('[class="MuiBox-root css-79elbk"]').scrollIntoView()
        cy.get('[type="number"]').clear().type('820')
        cy.get('[class="PrivateSwitchBase-input css-1m9pwf3"]').first().check();
        cy.get('[class="PrivateSwitchBase-input css-1m9pwf3"]').eq(1).check();
        cy.get('[class="PrivateSwitchBase-input css-1m9pwf3"]').eq(2).check();
        cy.get('[class="PrivateSwitchBase-input css-1m9pwf3"]').eq(7).check();
        cy.get('[class="MuiBox-root css-1pr1g5o"]').scrollIntoView().should('be.visible');
        cy.get('[class="MuiTypography-root MuiTypography-body1 inter css-hocx5c"]').last().should('have.text', '$110700')
    });
})