describe('Select 3 items from saucedemo and check the cart', () => {
  
  before(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('select 3 random items', () => {


const selectedIndex= new Set()

cy.get('button.btn_inventory').then($buttons=> {

const totalItems = $buttons.length


while(selectedIndex.size<3){

	const randomIndex=Math.floor(Math.random() * totalItems)
	selectedIndex.add(randomIndex)
}

Array.from(selectedIndex).forEach(index=> {

	cy.wrap($buttons[index]).click()
})

})

cy.get('.shopping_cart_badge').should('have.text','3')
  }

  	)
})