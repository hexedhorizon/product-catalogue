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
                <div class="row">
                    <!-- Image -->
                    <div class="col-md-3">
                        <img src="${product.product_thumbnail}" class="img-fluid h-100 " alt="...">
                    </div>

                    <!-- Description -->
                    <div class="col-md-6">
                        <div class="card-body">
                            <h6 class="card-title">${product.product_name}</h6>
                            <p class="card-text">${product.product_price} Php -${product.product_description}</p>
                            <p class="card-text"><small class="text-body-secondary">${product.product_date_added}</small></p>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="col">
                        <div class="card-body">
                            <button type="button" class="btn btn-primary btn-sm col-12" onclick="addToCart(${product.product_id})">Add to Cart</button>
                            <div style="height:.1em;"></div>
                            <button type="button" class="btn btn-primary btn-sm col-12">Details</button>
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

let clickCounter = {}; // Object to store click counts for each product

function addToCart(productId) {
    // Increment click count for the corresponding product
    clickCounter[productId] = (clickCounter[productId] || 0) + 1;

    // Display the click count (you can update this part based on your UI requirements)
    alert(`Product ${productId} added to cart. Click count: ${clickCounter[productId]}`);
}
