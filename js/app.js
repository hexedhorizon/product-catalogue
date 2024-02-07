fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
    //List
      // Handle the data and create a list
      const productListContainer = document.getElementById('productList');

      // Loop through the data and create list items
      data.forEach(product => {
        const listItem = document.createElement('p');
        listItem.innerHTML = `
          <div>${product.product_name}</div>
          <div>${product.product_price}</div>
          <div>${product.product_description}</div>
          <div>Added on: ${product.product_date_added}</div>
        `;
        productListContainer.appendChild(listItem);
      }); 

    })
.catch(error => {
console.error('Error fetching data:', error);
});