<template>
<div class="contact">
  <div>
    <!--Main Slider-->
    <section class="main-slider">

        <div class="rev_slider_wrapper fullwidthbanner-container"  id="rev_slider_one_wrapper" data-source="gallery">
            <div style="display: flex;" class="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
                <ul>

                    <li data-description="Slide Description" data-easein="default" data-easeout="default" data-fsmasterspeed="1500" data-fsslotamount="7" data-fstransition="fade" data-hideafterloop="0" data-hideslideonmobile="off" data-index="rs-1688" data-masterspeed="default" data-param1="" data-param10="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-rotate="0" data-saveperformance="off" data-slotamount="default" data-thumb="/static/images/main-slider/image-2.jpg" data-title="Slide Title" data-transition="parallaxvertical">
                    <img alt="" class="rev-slidebg" data-bgfit="cover" data-bgparallax="10" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src="/static/images/main-slider/image-2.jpg">

                    <div class="column col-md-4 col-sm-6 col-xs-12"></div>
                    <div class="column col-md-4 col-sm-6 col-xs-12"  style="background-color:black;margin-top:150px;">
                      <div class="inner-column">
                        <h1 style="color:white;margin-bottom:40px;text-align:center;">Member Login</h1>

                        <!-- Contact Form -->
                        <div class="contact-form alternate">

                          <!--Contact Form-->
                          <div id="contact-form">
                            <div class="row clearfix">
                              <div class="form-group">
                                <label style="color:white">Login</label>
                                <input v-model="username" type="text" maxlength="50" name="username" placeholder="" required>
                              </div>

                              <div class="form-group">
                                <label style="color:white">Password</label>
                                <input v-model="password" type="password" maxlength="50" name="password" placeholder="" required>
                              </div>

                              <div class="form-group" style="float: right;">
                                <button class="theme-btn btn-style-two" type="submit" name="submit-form" @click="login">Login</button>
                              </div>

                            </div>
                          </div>

                        </div>
                        <!--End Contact Form -->

                      </div>
                    </div>

                    </li>
                </ul>

            </div>
        </div>
        <!--Scroll Dwwn Btn-->
      </section>
    <!--End Main Slider-->
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      username:'rex',
      password:'111111'
    }
  },
  methods: {
    login: function() {
      axios.post('http://128.199.100.107:5000/account/login',{
        "username": this.username,
        "password": this.password
      })
      .then( function(res){
        console.log(res.data),
        console.log(res.data.sessionToken)
      }).catch(function(error){
        console.log('Error: ', error)
      })
    }
  },
  mounted () {
    jq()
  }
}

function jq()
{
  var tpj=jQuery;
    var revapi486;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_one").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_one");
        }else{
            revapi486 = tpj("#rev_slider_one").show().revolution({
      sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"yes",
                delay:1000000000000000000000000000000000000000000000000000000000000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                },
                 responsiveLevels:[1200,1040,778,480],
                 visibilityLevels:[1200,1040,778,480],
                 gridwidth:[1200,1040,778,480],
                 gridheight:[850,600,500,400],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }



     if(tpj("#rev_slider_four").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_four");
        }else{
            revapi486 = tpj("#rev_slider_four").show().revolution({
      sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }

                },
                 responsiveLevels:[1200,1040,778,600],
                 visibilityLevels:[1200,1040,778,600],
                 gridwidth:[1200,1040,778,600],
                 gridheight:[750,640,600,420],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
     }); /*ready*/
}
</script>
