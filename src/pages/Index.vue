<template>
  <div>
    <let-it-snow
            v-bind="snowConf"
            :show="show"
    ></let-it-snow>
    <main-carousel-section></main-carousel-section>
    <div class="page-header page-header-small absolute-title">
      <div class="content-center">
        <div class="container">
          <div class="top-title">
            <h1 class="title top-header">Новогодние авторские ёлки</h1>
            <h2>от NikasDecor <small>by PremiumArtStudio</small></h2>
            <!--<p class="top-header"></p>-->
          </div>
          <div class="text-center">
            <a href="https://www.instagram.com/nikasdecor/"  target="_blank" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="text-center gold">У нас есть всё для Нового года!</h2>
        <!--<h2 class="text-center gold">  Мы создали услугу по созданию новогоднего настроения,<br> которая не имеет аналогов в городе Харьков</h2>-->
        <h2 class="gold"> Jingle bells... <span>Скоро Новый Год и мы уже приготовились - собрали милые игрушки
                    эксклюзивных производителей Европы и США, вдохновились работами лучших декораторов
                    мира, создали несоклько вариантов авторских ёлок, а для особых ценителей новогоднего
                    настроения и чего-то новенького подготовили увлекательную программу по украшению ёлки
                    с Вашими близкими.</span></h2>

          <div class="row justify-center my-4">
              <div class="col-md-4 text-center">
                  <a href="#/contact" class="main-link">Связяться с нами</a>
              </div>
          </div>

          <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                        src="img/img1.jpg"
                        alt="Thumbnail Image"
                        class="rounded-circle img-fluid img-raised"
                />
                <h2 class="title">Создадим полный look ёлки</h2>
                <p class="description text-left">
                  Поможем приобрести елку, игрушки и новогодний декор у производителей Европы и США
                  по наилучшим ценам в Украине.<br><br>
                  Подберем стилистику, более всего подходящую Вашему характеру помещения.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                        src="img/img2.jpg"
                        alt="Thumbnail Image"
                        class="rounded-circle img-fluid img-raised"
                />
                <h2 class="title">Украсим ёлку</h2>
                <p class="description text-left">
                  Наша команда справится с этим занятием за несколько часов вместо Вас, если
                  вдруг Вы не находите времени для этого действа.<br><br>

                  Для тех, кто хочет провести это событие (украшение елки) с особым настроением,
                  разделить его с детьми и близкими - мы приготовили программу с лайфхаками от
                  декораторов. Будет интересно!
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="team-player">
                <img
                        src="img/img3.jpg"
                        alt="Thumbnail Image"
                        class="rounded-circle img-fluid img-raised"
                />
                <h2 class="title">Уборка ёлки после праздника</h2>
                <p class="description">
                  Послепраздничный ритуал выхода в новый год сохраняя прекрасное настроение.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-show-decor">
      <div class="container">
        <div class="row justify-center price-link">
          <div class="col-md-4 text-center">
            <a href="#/price" class="main-link">Узнать цены</a>
          </div>
        </div>
        <h2 class="title text-center">Вдохновляемся!</h2>
        <div class="row">
          <p class="text-center"> Мы взяли за основу три варианта классического оформления Новогодней ели.
            Дали им имена Paris, London, Wien и подобрали соответствующие игрушки и декор.
          </p>
          <tabs
                  pills
                  class="nav-align-center"
                  tab-content-classes="gallery"
                  tab-nav-classes="nav-pills-just-icons"
                  type="primary"
          >
            <tab-pane title="Profile">
              <p slot="label" class="now-ui-icons">Paris</p>
              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/tabs/paris1.jpg" class="img-raised" />
                    <img src="img/tabs/paris3.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/tabs/paris4.jpg" alt="" class="img-raised" />
                    <img src="img/tabs/paris2.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Home">
                <p slot="label" class="now-ui-icons">Wien</p>
              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/tabs/wien1.jpg" alt="" class="img-raised" />
                    <img src="img/tabs/wien4.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/tabs/wien3.jpg" alt="" class="img-raised" />
                    <img src="img/tabs/wien2.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Messages">
                <p slot="label" class="now-ui-icons">London</p>
              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/tabs/london1.jpg" alt="" class="img-raised" />
                    <img src="img/tabs/london3.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/tabs/london4.jpg" alt="" class="img-raised" />
                    <img src="img/tabs/london2.jpg" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { Button, FormGroupInput } from '@/components';
    import { Tabs, TabPane } from '@/components';
    import MainCarouselSection from './components/MainCarouselSection';
    import { Parallax } from '@/components';

    export default {
        name: "Main",
        bodyClass: 'landing-page',
        components: {
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
            Tabs,
            TabPane,
            Parallax,
            MainCarouselSection

        },
        data() {
            return {
                form: {
                    firstName: '',
                    email: '',
                    message: ''
                },
                snowConf: {
                    windPower : 1,
                    speed : 3,
                    count : 12,
                    size : 10,
                    opacity : 1,
                    images: ['/img/snow/snowflake_silver.png',
                        '/img/snow/snowflake_silver.png',
                        'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/snow.png']
                },
                show: false
            };
        },
        mounted(){
            this.show = true
        }
    }
</script>

<style scoped>

  .top-header{
    font-size: 5em;
    letter-spacing: 2px;
  }

  .team-player h2{
    letter-spacing: 1px;
  }

  .nav-pills.nav-pills-just-icons .nav-item .nav-link p {
      line-height: 80px;
      font-size: 24px;
  }

  .price-link{
    margin-top: -45px;
    margin-bottom: 45px;
  }

  .absolute-title{
    height: 500px;
    position: absolute;
    top: 120px;
    width: 100%;
    z-index: 3;
  }

  .page-header .top-title{
    margin-top: 20px;
  }



</style>