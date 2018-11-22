<template>
<div class="contact">
  <div>
    <!--Page Title-->
    <section class="page-title" style="background-image:url(/static/images/gallery/contact.jpg);">
      <div class="auto-container">
        <div class="title">Get In Touch</div>
        <h2>Contact</h2>
      </div>
    </section>
    <!--End Page Title-->

    <!--Contact Pahe Section-->
    <section class="contact-page-section">
      <div class="outer-container clearfix">
        <div class="form-column">
          <div class="inner-column">
            <h2>Contact Us</h2>
            <div style="margin-bottom:100px;" class="text">Please Call 05-465 3502</div>
            <h2>Email Us</h2>

            <!-- Contact Form -->
            <div class="contact-form alternate">

              <!--Contact Form-->
              <form method="post" action="/static/php/sendemail.php" id="contact-form">
                <div class="row clearfix">
                  <div class="form-group">
                    <label>Name *</label>
                    <input type="text" name="username" placeholder="" required>
                  </div>

                  <div class="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" placeholder="" required>
                  </div>

                  <div class="form-group">
                    <label>Message *</label>
                    <textarea name="message" placeholder=""></textarea>
                  </div>

                  <div class="form-group">
                    <button class="theme-btn btn-style-two" type="submit" name="submit-form">Send Email</button>
                  </div>

                </div>
              </form>

            </div>
            <!--End Contact Form -->

          </div>
        </div>
        <!--End Map Column-->

      </div>

    </section>
    <!--End Contact Page Section-->

    <!--Main Footer / Footer Style Two-->
    <section class="footer-style-two">
      <div class="auto-container">
        <!--Widget Section-->
        <div class="widgets-section">
          <div class="row clearfix">
            <!--Column-->
            <div class="column col-md-3 col-sm-6 col-xs-12">
              <div class="logo-widget footer-widget">
                  <div class="inner-box">
                      <div class="logo">
                        <img src="/static/images/ehub_logo.png" height="100" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <!--Column-->
            <div class="column col-md-6 col-sm-6 col-xs-12">
              <div class="text">
                05-465 3502 <br>
                2198-2201, Jalan Timah,
                Taman Bandar Baru, Kampar,
                Perak, Malaysia <br>
                sixbase.ehub@gmail.com
              </div>
            </div>

            <!--Column-->
            <div class="column col-md-3 col-sm-6 col-xs-12">
              <div class="newsletter-widget footer-widget">


                    <ul class="social-icon-three">
                        <li><a target="_blank" href="https://www.instagram.com/ehubkampar/"><span class="fa fa-instagram"></span></a></li>
                        <li><a target="_blank" href="https://www.facebook.com/ehubkampar/"><span class="fa fa-facebook"></span></a></li>
                        <li><a href="mailto:sixbase.ehub@gmail.com"><span class="fa fa-envelope-o"></span></a></li>
                    </ul>

                </div>
            </div>

          </div>
        </div>
        <!--End Widget Section-->

        <!--Copyright-->
        <div class="copyright">Copyright &copy; Monde 2017. All Rights Reserved.</div>

      </div>
    </section>
    <!--End Main Footer-->
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    $(document).scrollTop(0);
  }
}
</script>
