<template>
  <div class="" id="carousel">
    <!--<div class="container">-->
      <!--<div class="title">-->
        <!--<h4>Carousel</h4>-->
      <!--</div>-->
      <!--<div class="row justify-content-center">-->
        <!--<div class="col-12">-->
          <el-carousel height="500px" :interval="5000">
            <el-carousel-item>
              <img class="d-block" src="img/carousel/ourBg.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <!--<h5>Nature, United States</h5>-->
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/carousel/gray-blue-01.jpg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <!--<h5>Somewhere Beyond, United States</h5>-->
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/carousel/christmas_tree_mint_008.jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <!--<h5>Yellowstone National Park, United States</h5>-->
              </div>
            </el-carousel-item>
          </el-carousel>
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style>

  #carousel img{
    object-fit: cover;
    width: 100%;
  }
</style>
