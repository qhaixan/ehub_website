<template>
<div class="reservation">
  <div>
    <!--Page Title-->
    <section class="page-title" style="background-image:url(static/images/background/6.jpg);">
      <div class="auto-container">
        <div class="title">Make Your</div>
        <h2>Reservation</h2>
      </div>
    </section>
    <!--End Page Title-->

    <!--Reservation Form Section-->
    <section class="reserve-form-section">
      <div class="auto-container">
        <div class="row clearfix">
          <div class="column col-md-4 col-sm-12 col-xs-12">
            <h3>Telephone reservation</h3>
            <div class="text">Please Call 765 - 879 - 1077</div>
            <br>
            <h3>Location</h3>
            <div class="text">No.2198 - 2201,<br>Jalan Timah,<br>Taman Bandar Baru,<br>31900 Kampar, Perak.</div>
          </div>
          <div class="form-column col-md-8 col-sm-12 col-xs-12">

            <!-- Contact Form -->
            <div class="contact-form">

              <!--Contact Form-->
              <form method="post" action="contact.html">
                <div class="row clearfix">
                  <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                    <label>First Name *</label>
                    <input type="text" name="username" placeholder="" required>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                    <label>Last Name *</label>
                    <input type="text" name="lastname" placeholder="" required>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                    <label>Phone Number *</label>
                    <input type="text" name="phone" placeholder="" required>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="" required>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                    <label>Number of People *</label>
                    <input type="text" name="text" placeholder="" required>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                    <label>Date *</label>
                    <div class="row clearfix">
                      <div class="inner-column col-md-3 col-sm-4 col-xs-6">
                        <input maxlength="2" type="text" name="day" placeholder="DD">
                      </div>
                      <div class="inner-column col-md-3 col-sm-4 col-xs-6">
                        <input maxlength="2" type="text" name="month" placeholder="MM">
                      </div>
                      <div class="inner-column col-md-3 col-sm-4 col-xs-6">
                        <input maxlength="4" type="text" name="year" placeholder="YYYY">
                      </div>
                    </div>

                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                    <label>Comments (optional)</label>
                    <textarea name="message" placeholder=""></textarea>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                    <button class="theme-btn btn-style-two" type="submit" name="submit-form">Send your reservation</button>
                  </div>

                </div>
              </form>

            </div>
            <!--End Contact Form -->

          </div>
        </div>
      </div>
    </section>
    <!--End Reservation Form Section-->

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
                    <a href="index.html"><img src="static/images/logo.png" alt="" /></a>
                  </div>
                  <div class="text">765 - 879 - 1077 <br> 55 Angelica Street, NY <br> info@monde.com</div>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="column col-md-6 col-sm-12 col-xs-12">
              <div class="newsletter-widget footer-widget">
                <h2>Sign Up For Our Newsletter</h2>
                <form method="post" action="contact.html">
                  <div class="form-group">
                    <input type="email" name="email" value="" placeholder="" required>
                    <button type="submit" class="subscribe-btn">Sign Up</button>
                  </div>
                </form>

                <ul class="social-icon-three">
                  <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                  <li><a href="#"><span class="fa fa-instagram"></span></a></li>
                  <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                  <li><a href="#"><span class="fa fa-envelope-o"></span></a></li>
                </ul>

              </div>
            </div>
            <!--Column-->
            <div class="column col-md-3 col-sm-6 col-xs-12">
              <div class="instagram-widget footer-widget">
                <h2>Instagram</h2>
                <div class="clearfix">
                  <figure class="image"><a href="static/images/gallery/1.jpg" class="lightbox-image"><img src="static/images/resource/sidebar-gallery-1.jpg" alt=""></a></figure>
                  <figure class="image"><a href="static/images/gallery/2.jpg" class="lightbox-image"><img src="static/images/resource/sidebar-gallery-2.jpg" alt=""></a></figure>
                  <figure class="image"><a href="static/images/gallery/3.jpg" class="lightbox-image"><img src="static/images/resource/sidebar-gallery-3.jpg" alt=""></a></figure>
                  <figure class="image"><a href="static/images/gallery/1.jpg" class="lightbox-image"><img src="static/images/resource/sidebar-gallery-4.jpg" alt=""></a></figure>
                  <figure class="image"><a href="static/images/gallery/2.jpg" class="lightbox-image"><img src="static/images/resource/sidebar-gallery-5.jpg" alt=""></a></figure>
                  <figure class="image"><a href="static/images/gallery/3.jpg" class="lightbox-image"><img src="static/images/resource/sidebar-gallery-6.jpg" alt=""></a></figure>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!--End Widget Section-->

        <!--Copyright-->
        <div class="copyright">Copyright &copy; Monde 2017. All Rights Reserved.</div>

      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
