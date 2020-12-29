
describe('Santa Wishlist Application', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('Visiting error page redirects back to wishlist form', function() {
    cy.visit('http://localhost:3000/error')
    cy.location().should((loc) => {
      expect(loc.toString()).to.eq('http://localhost:3000/')
    })
  })

  it('Visiting Submit Succcess page redirects back to wishlist form', function() {
    cy.visit('http://localhost:3000/success')
    cy.location().should((loc) => {
      expect(loc.toString()).to.eq('http://localhost:3000/')
    })
  })

  it('Submitting an empty form generates validation errors', function() {
    cy.get('#wishSubmit')
      .click()
    cy.contains('Field is required')
  })

  it('Exceeding Max length generates an appropriate error validation message', function() {
    cy.get('#username').type('This username is longer than 20 letters')
    cy.get('#wish').type('Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iure.')
    cy.get('#wishSubmit').click()

    cy.contains('Max length is 20 letters')
    cy.contains('Max length is 100 letters')
  })

  it('Submitting a user who is not registered redirects to error page', function() {
    cy.get('#username').type('Bugs Bunny')
    cy.get('#wish').type('Lots of carrots')
    cy.get('#wishSubmit').click()

    cy.location().should((loc) => {
      expect(loc.toString()).to.eq('http://localhost:3000/error')
    })

    cy.contains('This user does not exist. Please make sure that the name has been spelled correctly and try again.')

    cy.get('#returnHome').click()
    
    cy.location().should((loc) => {
      expect(loc.toString()).to.eq('http://localhost:3000/')
    })
  })

  it('Submitting a valid user which meets all criterias redirects to success page', function() {
    cy.get('#username').type('charlie.brown')
    cy.get('#wish').type('Playstation 5')
    cy.get('#wishSubmit').click()

    cy.location().should((loc) => {
      expect(loc.toString()).to.eq('http://localhost:3000/success')
    })


    cy.contains('Santa has received your wish！')

    cy.get('#returnHome').click()

    cy.location().should((loc) => {
      expect(loc.toString()).to.eq('http://localhost:3000/')
    })
  })

  it('Submitting a valid user which is too old redirects to error page and shows an error message', function() {
    cy.get('#username').type('bugs.bunny')
    cy.get('#wish').type('World Peace')
    cy.get('#wishSubmit').click()

    cy.location().should((loc) => {
      expect(loc.toString()).to.eq('http://localhost:3000/error')
    })

    cy.contains('Unfortunately, santa will not grant the wishes for kids over 10 years. You are too old for writing wishlists to Santa.')

    cy.get('#returnHome').click()

    cy.location().should((loc) => {
      expect(loc.toString()).to.eq('http://localhost:3000/')
    })
  })
})
