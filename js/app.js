fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
    //List
      // Handle the data and create a list
      const productListContainer = document.getElementById('productList');

      // Loop through the data and create list items
      data.forEach(product => {
        const listItem = document.createElement('p');
        listItem.textContent = `
            ${product.product_name} - ${product.product_price} | ${product.product_description} | added on ${product.product_date_added}
        `; // Concatenate name and program
        productListContainer.appendChild(listItem);
      }); 

    })
.catch(error => {
console.error('Error fetching data:', error);
});