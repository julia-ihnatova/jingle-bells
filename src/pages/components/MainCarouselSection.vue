<template>
  <div class="" id="carousel">
      <el-carousel :interval="5000">
        <el-carousel-item>
          <img class="d-block" src="img/carousel/ourBg.jpg" alt="First slide" />
          <div class="carousel-caption d-none d-md-block"></div>
        </el-carousel-item>
        <el-carousel-item>
          <img class="d-block" src="img/carousel/gray-blue-01.jpg" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block"></div>
        </el-carousel-item>
        <el-carousel-item>
          <img class="d-block" src="img/carousel/christmas_tree_mint_008.jpg" alt="Third slide" />
          <div class="carousel-caption d-none d-md-block"></div>
        </el-carousel-item>
      </el-carousel>
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
    height: 100%;
  }

  .el-carousel{
    height: 620px;
  }

  .el-carousel__container{
    height: 100%;
  }
</style>
