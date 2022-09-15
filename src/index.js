import Error404screen from "./Screen/Error404screen.js";
import ProductScreen from "./Screen/ProductScreen.js";
import { parseReuestUrl } from "./utils.js";
import HomeScreen from "./Screen/HomeScreen.js";
import CartScreen from "./Screen/CartScreen.js";
import ShippingScreen from "./Screen/ShippingScreen.js";
import PaymentScreen from "./Screen/PaymentScreen.js";
import PlaceOrderScreen from "./Screen/PlaceOrderScreen.js";
import LoginScreen from "./Screen/LoginScreen.js";
import RegisterScreen from "./Screen/RegisterScreen.js";
import ProfileScreen from "./Screen/ProfileScreen.js";
// import bar from './bar.js';

// bar();

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/Shipping/:id': ShippingScreen,
    '/payment/:id': PaymentScreen,
    '/place_Order/:id': PlaceOrderScreen,
    '/login': LoginScreen,
    '/Register/:id': RegisterScreen,
    '/Login/:id': LoginScreen,
    '/profile': ProfileScreen,
};

const router = async () => {

    const request = parseReuestUrl();
    const parseUrl = 
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') + 
    (request.verb ? `/${request.verb}` : '');

    const screen = routes[parseUrl] ? routes[parseUrl] : Error404screen;
    
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    await screen.after_render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange' 
, router);
