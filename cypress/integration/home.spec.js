describe('home page', ()=>{
    it('app online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

})

})

describe('Register', ()=>{
    it('Deliver details', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'Amon Alexandre Ferreira',
            cpf: '88936363360',
            email: 'ammon_tester2022@outlook.com',
            whatsapp: '88888888888',
            address: {
                postalcode: '60140120',
                street: 'Rua Carolina Sucupira',
                number: '26',
                details: 'Ap  26',
                district: 'Aldeota',
                city_state: 'Fortaleza/CE'
            },
            delivery_method: 'Moto', 
            cnh: 'cnh-digital.jpg'
        
        } 

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)


        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('input[accept^="image"]').attachFile(deliver.cnh)

        cy.get('form button[type="submit"]').click()
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')




    })
})

describe('Incorrect Cpf', ()=>{
    it('Deliver details', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'Amon Alexandre Ferreira',
            cpf: '88936363360AA',
            email: 'ammon_tester2022@outlook.com',
            whatsapp: '88888888888',
            address: {
                postalcode: '60140120',
                street: 'Rua Carolina Sucupira',
                number: '26',
                details: 'Ap  26',
                district: 'Aldeota',
                city_state: 'Fortaleza/CE'
            },
            delivery_method: 'Moto', 
            cnh: 'cnh-digital.jpg'
        
        } 

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)


        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('input[accept^="image"]').attachFile(deliver.cnh)

        cy.get('form button[type="submit"]').click()
        
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')




    })
})
