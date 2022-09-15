import { parseReuestUrl } from "../utils";

const PlaceOrderScreen = {


    after_render: () => {
        const request = parseReuestUrl();
        document.getElementById('ComingSoon').addEventListener('click', () => {
            document.location.hash = `/Coming_Soon/${request.id}`;
        });
    },
    render: () => {
        return `
        <section>
        <div class="Shipping-Container">
            <div class="Order-proces-list">
                <div class="single-line">
                    <hr>
                </div>
                <div class="list">
                    <p class="list-1">Signin</p>
                    <p class="Shipping">Shipping</p>
                    <p class="payment">Payment</p>
                    <p class="placeorder">Place Order</p>
                </div>
            </div>
        </div>
   </section>

   
   <!-- Place order section -->

   <section>
    <div class="Place-Order-Container">
        <div class="Details">
            <div class="Pay-ship">
                <div class="Shipping">
                    <h3>Shipping</h3>
                    <p>QWE FRE 45,DHAKA,3456, Bangladesh</p>
                </div>
                <div class="Payment">
                    <h3>Payment</h3>
                    <p>Paymnet Method :Paypal</p>
                </div>
            </div>
            <div class="Shopping-Cart">
                <h3>Shopping Cart</h3>
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
            </div>
        </div>
        <div class="Summery">
            <h3>Order Summery</h3>
            <h4>Items : <span>$324</span></h4>
            <h4>Shipping : <span>$30</span></h4>
            <h4>Tax : <span>$20</span></h4>
            <h4 class="Order-Total">Order Total : <span>$384</span></h4>
            <button id="ComingSoon">Coming Soon</button>
        </div>
    </div>
</section>




    <!-- Footer Section -->
    <Section>
        <div class="Shipping-Footer-Container placeOrder">
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

export default PlaceOrderScreen;