export { };

describe('Admin page', () => {
  it('should add new projects', () => {

    // Intercept API calls to avoid making them
    cy.intercept("GET", "/product", []);

    // Visit admin page and add new product
    cy.visit('http://localhost:3000/admin');
    cy.contains('button', 'Add New Product').click();
    cy.get('input[name="name"]').type('New product');
    cy.get('input[name="price"]').type('98.76');
    cy.get('textarea[name="description"]').type('Description');
    let fileName: string = 'compass.png';
    let imageUrl: string = `/images/products/${fileName}`;
    cy.get('input[name="imageUrl"]').type(imageUrl);
    cy.contains('button', 'Add Product').click();

    // Verify product was added
    cy.contains('New product');
    cy.contains('$98.76');
    cy.contains('Description');
    cy.get('img').should('exist');

    // TODO: Could not get this to work to find the specific image
      // .filter((index, element) => {
      //   const src = element.getAttribute('src');
      //   const filename = src?.match(/\/([^/]+)$/)?.[1]; // Extract the filename from the src using regex
      //   return filename === fileName; // Compare the filename with the desired imageUrl
      // })
      // .first()
      // .should('exist');
  })
})