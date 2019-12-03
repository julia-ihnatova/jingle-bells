<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        NikasStudio
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <p class="font-weight-bold p-2">+38 098 930 27 28</p>
      </li>
      <li class="nav-item">
        <a
                class="nav-link"
                href="/"
        >
          <!--&lt;!&ndash;<i class="now-ui-icons arrows-1_cloud-download-93"></i>&ndash;&gt;-->
          <p>Главная</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/price"
        >
          <!--&lt;!&ndash;<i class="now-ui-icons arrows-1_cloud-download-93"></i>&ndash;&gt;-->
          <p>Прайс</p>
        </a>
      </li>
      <li class="nav-item">
        <a
                class="nav-link"
                href="#/contact"
        >
          <!--&lt;!&ndash;<i class="now-ui-icons arrows-1_cloud-download-93"></i>&ndash;&gt;-->
          <p>Контакты</p>
        </a>
      </li>
      <!--<drop-down-->
        <!--tag="li"-->
        <!--title="Components"-->
        <!--icon="now-ui-icons design_app"-->
        <!--class="nav-item"-->
      <!--&gt;-->
        <!--<nav-link to="/">-->
          <!--<i class="now-ui-icons business_chart-pie-36"></i> All components-->
        <!--</nav-link>-->
        <!--<a-->
          <!--href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"-->
          <!--target="_blank"-->
          <!--class="dropdown-item"-->
        <!--&gt;-->
          <!--<i class="now-ui-icons design_bullet-list-67"></i> Documentation-->
        <!--</a>-->
      <!--</drop-down>-->
      <!--<drop-down-->
              <!--tag="li"-->
              <!--title="Examples"-->
              <!--icon="now-ui-icons design_image"-->
              <!--class="nav-item"-->
      <!--&gt;-->
        <!--<nav-link to="/landing">-->
          <!--<i class="now-ui-icons education_paper"></i> Landing-->
        <!--</nav-link>-->
        <!--<nav-link to="/login">-->
          <!--<i class="now-ui-icons users_circle-08"></i> Login-->
        <!--</nav-link>-->
        <!--<nav-link to="/profile">-->
          <!--<i class="now-ui-icons users_single-02"></i> Profile-->
        <!--</nav-link>-->
      <!--</drop-down>-->

      <!--<li class="nav-item">-->
        <!--<a-->
          <!--class="nav-link"-->
          <!--rel="tooltip"-->
          <!--title="Follow us on Twitter"-->
          <!--data-placement="bottom"-->
          <!--href="https://twitter.com/CreativeTim"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--<i class="fab fa-twitter"></i>-->
          <!--<p class="d-lg-none d-xl-none">Twitter</p>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="nav-item">-->
        <!--<a-->
          <!--class="nav-link"-->
          <!--rel="tooltip"-->
          <!--title="Like us on Facebook"-->
          <!--data-placement="bottom"-->
          <!--href="#"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--<i class="fab fa-facebook-square"></i>-->
          <!--<p class="d-lg-none d-xl-none">Facebook</p>-->
        <!--</a>-->
      <!--</li>-->
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="#"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
