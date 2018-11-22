import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'
import HubBoard from '@/components/HubBoard'
import HubRomanee from '@/components/HubRomanee'
import HubChorus from '@/components/HubChorus'
import Reservation from '@/components/Reservation'
import Login from '@/components/Login'
import MemberProfile from '@/components/MemberProfile'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/gallery',
      component: Gallery
    },
    {
      path: '/hubBoard',
      component: HubBoard
    },
    {
      path: '/hubChorus',
      component: HubChorus
    },
    {
      path: '/hubRomanee',
      component: HubRomanee
    },
    {
      path: '/reservation',
      component: Reservation
    }
    ,
    {
      path: '/login',
      component: Login
    }
    ,
    {
      path: '/memberProfile',
      component: MemberProfile
    }
  ]
})
