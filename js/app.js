fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
    //List
      // Handle the data and create a list
      const productListContainer = document.getElementById('productList');

      // Loop through the data and create list items
      const container = document.createElement('div');
      container.classList.add('card-container');

      data.forEach(product => {
          const listItem = document.createElement('div');
          listItem.innerHTML = `
          
              <div class="card" style="width: 18rem;">
                  <img src="${product.product_thumbnail}" class="img-fluid img-thumbnail" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${product.product_name} - ${product.product_price} Php</h5>
                      <p class="card-text">${product.product_description}</p>
                      <p class="card-text">${product.product_date_added}</p>
                      <a href="#" class="btn btn-primary">Add to Cart</a>
                  </div>
              </div>
          `;
          listItem.style.marginRight = '30px';
          container.appendChild(listItem);
});

productListContainer.appendChild(container);
    })
.catch(error => {
console.error('Error fetching data:', error);
});