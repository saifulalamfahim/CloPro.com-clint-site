import { parseReuestUrl } from "../utils";

const ShippingScreen = {

    after_render: () => {
        const request = parseReuestUrl();
        document.getElementById('Continue').addEventListener('click', () => {
            document.location.hash = `/payment/${request.id}`;
           
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

   <!-- Info Section -->

   <section>
    <div class="Info-Container">
        <h2>Shipping</h2>
        <form action="/action_page.php">
            <label for="fname">Address</label>
            <br>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">City</label>
            <br>
            <input type="text" id="lname" name="lname"><br><br>
            <label for="fname">Postal-Code</label>
            <br>
            <input type="text" id="fname" name="fname"><br><br>
         
            <label for="lname">Country</label>
            <br>
            <input type="text" id="lname" name="lname"><br><br>
            <input id="Continue" class="submit" type="button" value="Countinue">
          </form>
    </div>
   </section>


   
     <!-- Footer Section -->
     <Section>
        <div class="Shipping-Footer-Container">
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


export default ShippingScreen;