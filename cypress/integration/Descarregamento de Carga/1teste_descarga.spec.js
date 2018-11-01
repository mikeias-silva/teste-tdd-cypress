describe('Teste descarga', function(){
    it('acesso', function(){
        cy.visit('/'); 
        cy.get("[name='username']").type('ADMINCORP');
        cy.get("[name='password']").type('KMM2018');
        cy.get("[class='dx-checkbox-container'").click();
        // cy.wait(30000);
       cy.get("[class='login-form ng-trigger ng-trigger-formLogin ng-untouched ng-pristine ng-valid']").submit();
        cy.wait(8000);
        cy.get("[href='#Descarregamento de Cargas']").click();
        cy.get("[href='#Cadastros']").click();
        cy.wait(2000);
        cy.get("[href='/modulos/recinto/descarga/presenters/grids/guindaste']").click();
        cy.wait(2000);
        cy.get("[class='add-button']").click();
        cy.wait(2000);
        cy.get("[name='nome']").type('Guindaste cypress KRZ2');
        cy.get("[name='observacao']").type('teste inserção com o Cypress');
        cy.wait(2000);
        cy.get("[href='#Descarregamento de Cargas']").click();
        cy.get("[href='#Cadastros']").click();
        cy.wait(3000);
       
        // cy.get("[class='ng-untouched ng-pristine ng-valid']").submit();
        
        // cy.get("[class='header-logout']").click();
        expect(true).to.equal(true);

    })
})