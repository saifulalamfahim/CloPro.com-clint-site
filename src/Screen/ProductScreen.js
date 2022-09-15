import { parseReuestUrl } from "../utils";
import { getProduct } from "../api";

const ProductScreen = {
    after_render: () => {
        const request = parseReuestUrl();
        document.getElementById('click-botton').addEventListener('click', () => {
            document.location.hash = `/cart/${request.id}`;
            alert("Remember: next page only made for frontend development using html, CSS and javaScript. And didn't use any type of backend development code or data");
        });
    },
    render: async () => {
        const request = parseReuestUrl();
        const product = await getProduct(request.id);

        if(product.error) {
            return `<div>${product.error}</div>`
        }


        return `
        
    <Section>
        <div class="Product-details-Container">
            <div class="image">
                <img src="Images/Image - 23.png" alt="">
            </div>
            <div class="product-detail">
                <div class="product-image">
                    <img src="${product.image}" alt="">
                    <a href="/#/">Back To Home</a>
                </div>
                <div class="detail">
                    <h5>${product.name}</h5>
                    <div class="Star">
                        <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                        <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                        <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                        <i><span class="iconify" data-icon="bxs:star-half" style="color: black;"></span></i>
                        <i><span class="iconify" data-icon="ant-design:star-outlined" style="color: black;"></span></i>
                    </div>
                    <p class="price"><Span>Price : </Span>$${product.price}</p>
                    <p class="Description"><span>Description : </span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor </p>
                    <p class="status"><span>Status : </span> Available</p>
                    <button id="click-botton"><span>Add To Cart</span></button>
                </div>
            </div>
        </div>
    </Section>



    <footer>
        <div class="Product-Footer-Container">
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
    </footer>



   

             
        
        `
    },
};

export default ProductScreen;