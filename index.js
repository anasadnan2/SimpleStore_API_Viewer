let dtatAPI = new XMLHttpRequest();
dtatAPI.open("GET", "https://fakestoreapi.com/products");

dtatAPI.onload = function () {
  if (dtatAPI.status === 200) {
    let data = JSON.parse(dtatAPI.responseText);

    let templateCard = document.getElementById("product-card");
    let productsDiv = document.getElementById("products-div");

    templateCard.remove();
    for (let product of data) {
      let cardClone = templateCard.cloneNode(true);

      cardClone.querySelector(".product-img").src = product.image;
      cardClone.querySelector(".product-title").textContent = product.title;
      cardClone.querySelector(
        ".product-price"
      ).textContent = `$${product.price}`;

      productsDiv.appendChild(cardClone);
    }
  }
};

dtatAPI.send();
