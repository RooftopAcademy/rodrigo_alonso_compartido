export default function renderHomeView():string{
    return `
    <section class="d-flex card ">
        <img src="src/img/star.png" alt="" class="icon-main">
        <a href="product-category.html" id="btn-clothing" class="button--main">Indumentaria</a>
    </section>
    <section class="d-flex card ">
        <img src="src/img/favicon-heart.png" alt="" class="icon-main">
        <a href="#" id="btn-accessories" class="button--main">Accesorios</a>
    </section> 
    `
}