<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            г. Харьков, ул. Гольдберговская, 9
          </li>
          <li>
               +38 098 930 27 28
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style scoped>
   li{
     margin: 0 24px;
   }

</style>
