<template>
<div id="app" class="page-wrapper">
  <navbar></navbar>
  <router-view class="main content"></router-view>
  <!--Scroll to top-->
  <div class="scroll-to-top scroll-to-target" data-target="html"><span class="icon fa fa-angle-up"></span></div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'

function headerStyle() {
  var mainheader = $('.main-header');
  if(mainheader.length){
    var windowpos = $(window).scrollTop();
    var siteHeader = mainheader;
    var scrollLink = $('.scroll-to-top');
    if (windowpos >= 250) {
      siteHeader.addClass('fixed-header');
      scrollLink.fadeIn(300);
    } else {
      siteHeader.removeClass('fixed-header');
      scrollLink.fadeOut(300);
    }
  }
  // Scroll to a Specific Div
  var scroll_to_target = $('.scroll-to-target');
  if(scroll_to_target.length){
    scroll_to_target.on('click', function() {
      var target = $(this).attr('data-target');
       // animate
       $('html, body').animate({
         scrollTop: $(target).offset().top
       }, 1000);
    });
  }
}
export default {
  data(){
    return{
      posts:[]
    }
  },
  components: {
    'navbar': NavBar
  },
  mounted () {
    headerStyle()
  }
}
</script>
