<template>
    <div class="View">
        <br><br><br>
        <h1>Contact Us</h1>

        <div class="row" id="left">
            <div class="col-md-4 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="bi bi-geo-alt-fill"></i>
                    <h4>Location</h4>
                        <p>Cape Town, Western Cape, South Africa</p>
                    </li>
                </ul>
            </div>

            <div class="col-md-4 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="bi bi-telephone-outbound-fill"></i>
                    <h4>Telephone</h4>
                    <p><a href="tel: 0748671764">+27 74 867 1764 <br> +27 67 066 0615</a></p>
                    </li>
                </ul>
            </div>

            <div class="col-md-4 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="bi bi-envelope-at-fill"></i>
                    <h4>Email</h4>
                    <p>darrenviljoen32@gmail.com <br> septemberj626@gmail.com</p>
                    </li>
                </ul>
            </div>

        </div>
        <br><br><br>

        <h3 class="fw-bold col" id="right">Send Us a Message via Email:</h3>

        <div class="row">

        <div class="col-md mb-md-0 mb-5">
            <form @submit.prevent="submitForm" id="contact-form" name="contact-form" action="https://formspree.io/f/xjvqjgvr" method="POST" class="was-validated">

            <div class="row">

                <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control" placeholder="Enter Full Name" required v-model="name">
                    <div class="valid-feedback">
                        Valid!
                    </div>
                    <div class="invalid-feedback">
                        Please Enter A Name.
                    </div>
                </div>
                </div>

                <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" placeholder="Enter Email" required v-model="email">
                    <div class="valid-feedback">
                        Valid!
                    </div>
                    <div class="invalid-feedback">
                        Please Enter An Email.
                    </div>
                </div>
                </div>

            </div>

            <div class="row">

                <div class="col-md-12">
                    <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter Subject" required v-model="subject">
                    <div class="valid-feedback">
                        Valid!
                    </div>
                    <div class="invalid-feedback">
                        Please Enter A Subject.
                    </div>
                    </div>
                </div>
                
            </div>

            <div class="row">

                <div class="col-md-12">

                <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Enter Your Message" required v-model="message"></textarea>
                    <div class="valid-feedback">
                        Valid!
                    </div>
                    <div class="invalid-feedback">
                        Please Enter A Message.
                    </div>
                </div>

                </div>

            </div>

            <div class="text-center text-md-left">
                <button type="submit" class="btn" data-toggle="modal" data-target="#formModal">Send</button>
            </div>

                <!-- Modal -->
                <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="formModalLongTitle">Thank You!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Your Message Was Successfully Sent via Formspree.</p>
                    </div>
                    </div>
                </div>
                </div>

            </form>
        </div>

        </div>

    </div>

    <div>
        <!-- <Spinner/> -->
    </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue'

export default{
    components:{
        Spinner
    }
}
</script>


<style scoped>
    *{
        color: black;
    }
    .View{
        background-color: rgba(136, 136, 136, 0.181);
        margin-top: 5%;
        margin-bottom: 0%;
        margin-right: 1.5%;
        margin-left: 1.5%;
        padding-bottom: 10%;
    }
    .contact{
      padding-bottom: 2%;
    }
    .bi{
      font-size: xx-large;
      color: black;
    }
    input, textarea, button{
      margin-top: 25px;
    }
    a{
      text-decoration: none;
    }
    a:hover{
      transform: scale(1.01);
      color: #24ff02;
      box-shadow: 0em 0em 3em #24ff02;
    }
    label{
      color: floralwhite;
      text-align: initial;
    }
    h1{
      margin-top: 55px;
      padding-top: 50px;
    }
    h1, h2, h3{
      text-align: initial;
      padding-left: 15%;
      padding-right: 15%;
    }
    textarea{
      height: 150px;
    }
    .md-form input:focus{
      box-shadow: 0 0 20px floralwhite;
    }
    button{
      background-color: #6ae856;
      color: floralwhite;
      height: 55px;
      border-radius: 10px;
    }
    button:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em #24ff02,
      0 0 0 2px floralwhite,
      0em 0em 1em #24ff02;
    }
    form{
      margin-left: 2%;
      margin-right: 2%;
    }
    #left{
      animation: fromRight 1s ease;
      animation-duration: 5s;
    }
    #right{
      animation: fromLeft 1s ease;
      animation-duration: 5s;
    }
    #icons{
      animation: fadeIn 5s ease;
      animation-duration: 10s;
    /* }
    @keyframes fromLeft {
      0%{
        transform: translateX(100%);
      }
      100%{
        transform: translateX(0%);
      }
    }
    @keyframes fromRight {
        0%{
          transform: translateX(-100%);
        }
        100%{
          transform: translateX(0%);
        }
    }
    @keyframes fadeIn {
      0%{
        opacity: 0%;
      }
      100%{
        opacity: 100%;
      } */
    }
</style>