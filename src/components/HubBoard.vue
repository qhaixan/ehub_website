<template>
<div class="hubBoard">
  <div>
    <div class="fullwidth-page">
      <div class="our-info-detail">
        <div class="row clearfix" style="margin-top:100px;">
          <!--Column-->
          <div class="slider-column col-md-7 col-sm-12 col-xs-12">
            <div class="single-item-carousel owl-carousel owl-theme">
              <div class="slide">
                <div class="image">
                  <img src="static/images/gallery/board/board1.jpg" alt="" />
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="static/images/gallery/board/board2.jpg" alt="" />
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="static/images/gallery/board/board3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="content-column col-md-5 col-sm-12 col-xs-12">
            <div class="inner-content">
              <h3>The Board</h3>
              <div class="text">
                The Board is an above moderate class snooker centre. <br>
                In the board, we do provide customer a smoking room, <br>
                a chill area with sofa seated to ensure that all customer <br>
                can relax and enjoy their game. Besides that, food and <br>
                beverage including draught beer and brew coffee <br>
                are also served in the board.
              </div>
              <h4>Location</h4>
              <div class="text">05-465 3502 <br>
                2198-2201, Jalan Timah, <br>
                Taman Bandar Baru, Kampar, <br>
                Perak, Malaysia<br>
              </div>
              <h4>Opening Hours</h4>
              <div class="text">11am - 2am<br>Everyday</div>
            </div>
          </div>

        </div>
      </div>
      <!--End Our Info Detail-->
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    var single_item_carousel = $('.single-item-carousel');
  	if (single_item_carousel.length) {
  		single_item_carousel.owlCarousel({
  			loop:true,
  			margin:10,
  			nav:true,
  			smartSpeed: 1000,
  			autoplay: 5000,
  			navText: [ '<span class="ion-ios-arrow-thin-left"></span>', '<span class="ion-ios-arrow-thin-right"></span>' ],
  			responsive:{
  				0:{
  					items:1
  				},
  				600:{
  					items:1
  				},
  				1200:{
  					items:1
  				}
  			}
  		});
  	}
    $(document).scrollTop(0);
}
}
</script>
