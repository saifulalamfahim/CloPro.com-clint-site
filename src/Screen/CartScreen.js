import { parseReuestUrl } from "../utils";

const CartScreen = {
    after_render: () => {
        const request = parseReuestUrl();
        document.getElementById('Checkout-button').addEventListener('click', () => {
            document.location.hash = `/Shipping/${request.id}`;
            alert("Remember: next page only made for frontend development using html, CSS and javaScript. And didn't use any type of backend development code or data");
        });
    },
    render: () => {
        return `
                <section>
        <div class="Cart-Container">
            <div class="Cart">
                <div class="Shipping-price">
                    <h3>Shipping Cart</h3>
                    <p>Price</p>
                </div>
                <div class="Shipping-Details">
                    <img src="images/Image - 6.png" alt="">
                    <h2>JABRA BIZ 1500 blackHeadphone</h2>
                    <button class="Qty">QTY <input type="number"></button>
                    <button class="remove">Remove</button>
                    <p>$45</p>
                </div>

                <div class="Shipping-Details">
                    <img src="images/Image - 8.png" alt="">
                    <h2>Intensive Eye Cream with Vitamin C</h2>
                    <button class="Qty">QTY <input type="number"></button>
                    <button class="remove">Remove</button>
                    <p>$21</p>
                </div>

                <div class="Shipping-Details">
                    <img src="images/Image - 9.png" alt="">
                    <h2>Spider Water Bottle Shaker 
                        Cups 500ml</h2>
                    <button class="Qty">QTY <input type="number"></button>
                    <button class="remove">Remove</button>
                    <p>$25</p>
                </div>

                <div class="Shipping-Details">
                    <img src="images/Image - 11.png" alt="">
                    <h2>Flower Vase Island Display Merchandising</h2>
                    <button class="Qty">QTY <input type="number"></button>
                    <button class="remove">Remove</button>
                    <p>$66</p>
                </div>

                <div class="Shipping-Details">
                    <img src="images/Image - 17.png" alt="">
                    <h2>JABRA BIZ 1500 blackHeadphone</h2>
                    <button class="Qty">QTY <input type="number"></button>
                    <button class="remove">Remove</button>
                    <p>$13</p>
                </div>

                <div class="Shipping-Details">
                    <img src="images/Image - 22.png" alt="">
                    <h2>Intensive Eye Cream with Vitamin C</h2>
                    <button class="Qty">QTY <input type="number"></button>
                    <button class="remove">Remove</button>
                    <p>$88</p>
                </div>
            </div>
            <div class="Details">
                    <div class="Tolal">
                        <h3>Total Items : 30</h3>
                        <h3>Total Amount : $237</h3>
                    </div>
                    <div class="button">
                        <button id="Checkout-button">Proceed To Checkout</button>
                    </div>
            </div>

        </div>
    </section>


    
<!-- Footer Section -->
<Section>
    <div class="Cart-Footer-Container">
        <div class="footer-detail">
            <div class="Contact">
                <div class="Contact-detail">
                    <p>Address : b-block Halishahar</p>
                    <p>Number : 01627800823</p>
                    <p>Email : fahim12345saiful@gmail.com</p>
                </div>
                <div class="line"></div>

            </div>
            <div class="partner">
                    <div class="partner-detail">
                        <h5>Partner</h5>
                        <p>Cannon, Nikie, Boltron, Goggle, Mataversy, Wolton, Nirvanaba, Prane,
                            KalaManik, Boston, Maxfox, CNNN, Commercial, Fire, Aladin, Daraje, FoxMEtter,  </p>
                    </div>
                    <div class="line-1"></div>
            </div>
           
            <div class="social-media">
                <i><a href=""><span class="iconify" data-icon="ci:facebook" style="color: white;"></span></a></i>
                <i><a href="https://github.com/saifulalamfahim"><span class="iconify" data-icon="bxl:github" style="color: white;"></span></a></i>
                <i><a href=""><span class="iconify" data-icon="entypo-social:linkedin-with-circle" style="color: white;"></span></a></i>                     
            </div>
        </div>
        <div class="cpyright">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <p class="copy">Copyright  resrved by Saiful Alam</p>
        </div>
    </div>
</Section>

        
        
        
        `;
    }
}
export default CartScreen;