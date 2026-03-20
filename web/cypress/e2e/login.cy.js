describe('template spec', () => {
  it('Login com sucesso', () => {
    cy.viewport(1920,1080)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()

  })

  it('Campo em Branco', () => {

    cy.visit('http://localhost:3000')

    cy.contains('button', 'Entrar').click()

    cy.contains('Ei, não esqueça de digitar seu email!')
    cy.contains('Você precisa de uma senha para entrar! 🔒')

  })

  it('Senha e email errados', () => {

    cy.visit('http://localhost:3000')

    cy.get('#email').type('@gmail.com')
    cy.get('#password').type('8')

    cy.contains('button', 'Entrar').click()
    cy.contains('Hmm... esse email parece estar errado 🤔')

  })

  it('Senha incorreto', () => {

    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('8')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
  })

})