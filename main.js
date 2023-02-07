
const toggleDesktopMenu = () => {
    $desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
    $mobileMenu.classList.toggle('inactive');
    if(!$shoppingCartContainer.classList.contains('inactive')){
        $shoppingCartContainer.classList.add('inactive');
    }

    if(!$productDetailContainer.classList.contains('inactive')){
        $productDetailContainer.classList.add('inactive');
    }
};

const toggleCart = () => {
    $shoppingCartContainer.classList.toggle('inactive');
    if(!$mobileMenu.classList.contains('inactive')){
        $mobileMenu.classList.add('inactive');
    }
    if(!$productDetailContainer.classList.contains('inactive')){
        $productDetailContainer.classList.add('inactive');
    }
};

const openProductDetailAside = () => {
    $productDetailContainer.classList.remove('inactive');
};

const closeProductDetail = () => {
    $productDetailContainer.classList.add('inactive');
};

const $menuEMail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');
const $menuHamIcon = document.querySelector('.menu');
const $menuCartIcon = document.querySelector('.navbar-shopping-cart');
const $productDetailCloseIcon = document.querySelector('.product-detail-close');
const $mobileMenu = document.querySelector('.mobile-menu');
const $shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const $cartContainer = document.querySelector('.cards-container');
const $productDetailContainer = document.querySelector('#productDetail');

$menuEMail.addEventListener('click', toggleDesktopMenu);
$menuHamIcon.addEventListener('click', toggleMobileMenu);
$menuCartIcon.addEventListener('click', toggleCart);
$productDetailCloseIcon.addEventListener('click', closeProductDetail)
const productList = [];

productList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Moto',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Pantalla',
        price: 1200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)


const renderProducts = (productList) => {
    for( product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        $cartContainer.appendChild(productCard);
    }
};

renderProducts(productList);