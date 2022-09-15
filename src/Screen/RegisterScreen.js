import { parseReuestUrl } from "../utils";

const RegisterScreen = {
    after_render: () => {

        const request = parseReuestUrl();
        document.getElementById('User').addEventListener('click', () => {
            document.location.hash = `/Login/${request.id}`;
          
        });

    },
    render: () => {
        return`
        
                  
    <section>
        <div class="Register-Container">
            <h2>Register</h2>
            <form action="/action_page.php">
                <label for="fname">Name</label>
                <br>
                <input type="text" id="fname" name="fname"><br><br>
                <label for="lname">Email</label>
                <br>
                <input type="email" id="lname" name="lname"><br><br>
                <label for="fname">Password</label>
                <br>
                <input type="password" id="fname" name="fname"><br><br>
             
                <label for="lname">Re-Type-Password</label>
                <br>
                <input type="password" id="lname" name="lname"><br><br>
                <input class="submit" type="submit" value="Signin">
              </form>

              <p><a id="User">Already have a account? Sign-In
            </a></p>

        </div>
    </section>


     <Section>
        <div class="Register-Footer-Container">
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

        
        
        `
    }
}

export default RegisterScreen;