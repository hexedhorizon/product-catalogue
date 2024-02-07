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

            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.product_name} - ${product.product_price} Php</h5>
              <p class="card-text">${product.product_description}</p>
              <p class="card-text">${product.product_date_added}</p>
              
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        `;
        productListContainer.appendChild(listItem);
      }); 

    })
.catch(error => {
console.error('Error fetching data:', error);
});