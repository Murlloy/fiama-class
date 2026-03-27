describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    const redes = [
      'Instagram',
      'YouTube',
      'Indicação de Amigo',
      'Udemy',
      'LinkedIn'
    ]

    const habilidades = [
      "CyberZero",
      "HTML",
      "CSS",
      "Fiama"
    ]

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Formulários').click()

    cy.get('#name').type('Murillo Fernandes')
    cy.get('#email').type('murillo0980@gmail.com')
    cy.get('#consultancyType').select('inCompany')
    cy.get('#phone').type('11984740059')

    cy.contains('span', 'Pessoa Jurídica').click()
    cy.contains('label', 'Pessoa Física', {timeout: 10000}).find('input').should('be.not.checked')

    cy.get('#document').type('98525149000199')

    redes.forEach((item) => {
      cy.contains('label', item).find('input').check().should('be.checked')
    })

    // type('{enter}') para dar enter

    cy.get('#details').type('aaaaaaaaaaaaa')

    habilidades.forEach((item) => {
      cy.get('#technologies').type(item).type('{enter}')
      cy.contains('span', item).should('be.visible')
    })

  })
})

