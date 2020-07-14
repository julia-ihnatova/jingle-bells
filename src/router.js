import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Price from './pages/Price.vue';
import Contact from './pages/Contact.vue';
import MainFooter from './layout/MainFooter.vue';
import OurNavbar from './layout/OurNavbar.vue';

// import Landing from './pages/Landing.vue';
// import Login from './pages/Login.vue';
// import Profile from './pages/Profile.vue';
// import MainNavbar from './layout/MainNavbar.vue';

// import Main from './pages/Main.vue';



Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
    // mode: 'history',
  routes: [
      {
          path: '/',
          name: 'index',
          components: {default: Index, header: OurNavbar, footer: MainFooter},
          props: {
              header: {colorOnScroll: 400},
              footer: {backgroundColor: 'black'}
          },
      },
      {
          path: '/price',
          name: 'price',
          components: { default: Price, header: OurNavbar, footer: MainFooter },
          props: {
              header: { colorOnScroll: 400 },
              footer: { backgroundColor: 'black' }
          }
    },
      {
          path: '/contact',
          name: 'contact',
          components: { default: Contact, header: OurNavbar, footer: MainFooter },
          props: {
              header: { colorOnScroll: 400 },
              footer: { backgroundColor: 'black' }
          }
      },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
