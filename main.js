// This is the CS201 Web Dev 1 final. Your task is to make a responsive e-commerce site using
// BS4 as your CSS front end framework and load products from the FakeStore API (linked below) -->
// FakeStoreAPI end point: https://fakestoreapi.com/products
console.log('hehe');

$(document).ready(function () {
    loadProduct(8);
});

const loadProduct = (quantity) => {
    let url = `https://fakestoreapi.com/products?limit=${quantity}`
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            let products = JSON.parse(this.responseText);
            console.log(products);
            loadSlider(products);
        }
    }

    xhr.send();

}

const loadSlider = (list) => {
    list.forEach(product => {
        let data = `
            <div class="card product">
                <div class="product-img-wrapper">
                    <img class="card-img-top" src="${product.image}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title product-title">${product.title}</h5>
                    <p class="card-price product-price">${product.price} $</p>
                </div>
            </div>
            
        `
        $(".my-slider").append(data);
    });
    configSlider();
}

function configSlider() {
    let slider = tns({
        container: '.my-slider',
        items: 1,
        gutter: 20,
        slideBy: 1,
        autoplay: true,
        controlsContainer: '#controls',
        edgePadding: 20,
        prevButton: '.previous',
        nextButton: '.next',
        autoplayButton: '.auto',
        mouseDrag: true,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
          600: {
            items: 2
          },
          640: {
            items: 3
          },
          1200: {
            items: 4
          },
          1400: {
            items: 4
          }
        },
      });
}