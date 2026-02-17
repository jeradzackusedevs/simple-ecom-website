const container = document.getElementById("product-detail");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

console.log("Product ID:", productId);

fetch("http://127.0.0.1:5000/products")
  .then(res => res.json())
  .then(products => {
    console.log("Products:", products);

    const product = products.find(p => p.id == productId);

    if (!product) {
      container.innerHTML = "<h2>Product not found</h2>";
      return;
    }

    container.innerHTML = `
      <div class="product">
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>$${product.price}</p>

        <label>Select Size:</label>
        <select id="size"></select>

        <button id="add">Add to Cart</button>
      </div>
    `;

    const sizeSelect = document.getElementById("size");

    if (product.sizes && product.sizes.length > 0) {
      product.sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
      });
    }

    document.getElementById("add").addEventListener("click", () => {
      const selectedSize = sizeSelect.value;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ ...product, selectedSize });

      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart");
    });
  })
  .catch(err => {
    console.error("Fetch error:", err);
    container.innerHTML = "<h2>Error loading product</h2>";
  });
