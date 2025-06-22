function fetchAndRenderProducts(apiEndpoint, containerSelector) {
  fetch(apiEndpoint)
    .then(res => {
      if (!res.ok) {
        return res.text().then(text => {
          console.error(`Server error on ${apiEndpoint}:`, text);
          throw new Error('Server error');
        });
      }
      return res.json();
    })
    .then(data => {
      console.log(`Fetched data from ${apiEndpoint}:`, data);

      const container = document.querySelector(containerSelector);
      if (!container) {
        console.error(`Container element '${containerSelector}' not found!`);
        return;
      }

      container.innerHTML = '';

      data.forEach(product => {
        const productHTML = `
          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="product">
              <a class="img-prod">
                <img class="img-fluid" src="${product.image || 'images/default.jpg'}" alt="${product.name}">
                <div class="overlay"></div>
              </a>
              <div class="text py-3 pb-4 px-3 text-center">
                <h3>${product.name}</h3>
                <div class="d-flex">
                  <div class="pricing">
                    <p class="price">${product.price}kg</p>
                  </div>
                </div>
                <div class="description">
                  <p>${product.description || ''}</p>
                </div>
              </div>
            </div>
          </div>
        `;

        container.insertAdjacentHTML('beforeend', productHTML);
      });
    })
    .catch(err => {
      console.error(`Fetch failed for ${apiEndpoint}:`, err);
    });
}


fetchAndRenderProducts('http://localhost:3000/api/buahan_shop', '#products-row');

