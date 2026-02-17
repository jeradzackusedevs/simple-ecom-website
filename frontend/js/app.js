const grid = document.getElementById("product-grid");

fetch("http://127.0.0.1:5000/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="view-btn">View Product</button>
      `;

      div.querySelector(".view-btn").addEventListener("click", () => {
        window.location.href = `product.html?id=${product.id}`;
      });

      grid.appendChild(div);
    });
  })
  .catch(err => console.error(err));
