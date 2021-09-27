import Product from "../Product"

export default function renderProductList(product:Product):string{
    return `
    <div name="card-product" class="d-flex container product-card" data-product-id="${product.id}">
        <div class="product-img">
            <img src="${product.image}" alt="">
        </div>
        <div class="d-flex product-listing">
            <h3 class="item-name">${product.productName}</h3>
            <p class="item-info">${product.description}</p>
            <p class="item-price"> Precio: $${product.price}</p>
        </div>
        <div class="d-flex sell-options">
            <a href="#" class="product-button">Comprar</a>
            <div class="button">
                <img src="src/img/img-cart.png" alt="" class="icon">
            </div>
        </div>
    </div>
    `
}