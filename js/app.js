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

              <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${product.product_thumbnail}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${product.product_name} - ${product.product_price} Php</h5>
                        <p class="card-text">${product.product_description}</p>
                        <p class="card-text"><small class="text-body-secondary">${product.product_date_added}</small></p>
                    </div>
                    </div>
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