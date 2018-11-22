<template>
<div class="navbar">
  <header class="main-header">

    <!--Header-Upper-->
    <div class="header-upper">
      <div class="auto-container">
        <div class="inner-container clearfix">

          <div class="logo-outer">
            <div class="logo"><a><router-link to="/home"><img src="/static/images/ehub_logo.png" height="150" alt="" title=""></router-link></a></div>
          </div>

          <div class="upper-right clearfix">

            <div class="nav-outer clearfix">
              <!-- Main Menu -->
              <nav class="main-menu">
                <div class="navbar-header">
                  <!-- Toggle Button -->
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    </button>
                </div>

                <div class="navbar-collapse collapse clearfix">
                  <ul class="navigation clearfix">
                    <li>
                      <router-link to="/home">Home</router-link>
                    </li>
                    <li class="dropdown"><a>Branch</a>
                      <ul>
                        <li>
                          <router-link to="/hubRomanee">Romanee Hauz</router-link>
                        </li>
                        <li>
                          <router-link to="/hubBoard">The Board</router-link>
                        </li>
                        <li>
                          <router-link to="/hubChorus">Chorus</router-link>
                        </li>
                      </ul>
                    </li>
                    <!--
                    <li class="dropdown"><a>About us</a>
                      <ul>
                        <li>
                          <router-link to="">About us</router-link>
                        </li>
                        <li>
                          <router-link to="">Menu</router-link>
                        </li>
                        <li>
                          <router-link to="">Our Chef</router-link>
                        </li>
                        <li class="dropdown"><a>Events</a>
                          <ul>
                            <li>
                              <router-link to="">Our Events</router-link>
                            </li>
                            <li>
                              <router-link to="">Events Classic</router-link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="">Location</router-link>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown">
                      <router-link to="/reservation">Reservation</router-link>
                    </li>

                    <li class="dropdown">
                      <router-link to="/gallery">Gallery</router-link>
                    </li>
                    -->
                    <li>
                      <router-link to="/contact">Contact</router-link>
                    </li>
                    <!--
                    <li>
                      <router-link to="/login">{{member}}</router-link>
                    </li>
                  -->
                  </ul>
                </div>
              </nav>
              <!-- Main Menu End-->

              <!--More Options-->
              <div class="more-options">

                <ul class="social-icon-one">
                  <li><a target="_blank" href="https://www.facebook.com/ehubkampar/"><span class="fa fa-facebook"></span></a></li>
                  <li><a target="_blank" href="https://www.instagram.com/ehubkampar/"><span class="fa fa-instagram"></span></a></li>
                </ul>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    <!--End Header Upper-->

    <!--Sticky Header-->
    <div class="sticky-header">
      <div class="auto-container clearfix">
        <!--Logo-->
        <div class="logo pull-left">
          <a class="img-responsive" title="Tali"><router-link to="/home"><img src="/static/images/ehub_logo.png" height="70" alt="Tali" title="Tali"></router-link></a>
        </div>

        <!--Right Col-->
        <div class="right-col pull-right">
          <!-- Main Menu -->
          <nav class="main-menu">
            <div class="navbar-header">
              <!-- Toggle Button -->
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            </button>
            </div>

            <div class="navbar-collapse collapse clearfix">
              <ul class="navigation clearfix">
                <li>
                  <router-link to="/home">Home</router-link>
                </li>
                <li class="dropdown"><a>Branch</a>
                  <ul>
                    <li>
                      <router-link to="/hubBoard">The Board</router-link>
                    </li>
                    <li>
                      <router-link to="/hubRomanee">Romanee Hauz</router-link>
                    </li>
                    <li>
                      <router-link to="/hubChorus">Chorus</router-link>
                    </li>
                  </ul>
                </li>
                <!--
                <li class="dropdown"><a>About us</a>
                  <ul>
                    <li>
                      <router-link to="">About us</router-link>
                    </li>
                    <li>
                      <router-link to="">Menu</router-link>
                    </li>
                    <li>
                      <router-link to="">Our Chef</router-link>
                    </li>
                    <li class="dropdown"><a>Events</a>
                      <ul>
                        <li>
                          <router-link to="">Our Events</router-link>
                        </li>
                        <li>
                          <router-link to="">Events Classic</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="">Location</router-link>
                    </li>
                  </ul>
                </li>

                <li class="dropdown">
                  <router-link to="/reservation">Reservation</router-link>
                </li>

                <li class="dropdown">
                  <router-link to="/gallery">Gallery</router-link>
                </li>
              -->
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
                <!--
                <li>
                  <router-link to="/login">{{member}}</router-link>
                </li>
              -->
              </ul>
            </div>
          </nav>
          <!-- Main Menu End-->
        </div>

      </div>
    </div>
    <!--End Sticky Header-->

  </header>
  <!--End Main Header -->
</div>
</template>

<script>
export default {
        data () {
            return  {
                member:'Login'
            }
        }
    }
</script>

<style>
</style>
