function productDetail(product){
    return `
    <div name="card-product" class="d-flex container product-card ">
        <div class="product-img">
            <img src="${product.getImage()}" alt="">
        </div>
        <div class="d-flex product-listing">
            <h3 class="item-name">${product.getName()}</h3>
            <p class="item-info">${product.getDescription()}</p>
            <p class="item-price"> Precio: $${product.getPrice()}</p>
        </div>
        <div class="d-flex sell-options">
            <a href="#" class="product-button">Comprar</a>
            <div class="button">
                <img src="img/img-cart.png" alt="" class="icon">
            </div>
        </div>
    </div>
    `
}