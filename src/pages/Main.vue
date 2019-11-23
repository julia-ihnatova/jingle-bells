<template>
    <div>
        <let-it-snow
                v-bind="snowConf"
                :show="show"
        ></let-it-snow>
        <div class="page-header page-header-small">
            <parallax
                    class="page-header-image"
                    style="background-image: url('img/ourBg.jpg')"
            >
            </parallax>
            <div class="content-center">
                <div class="container">
                    <h1 class="title top-header">Новогодние авторские ёлки</h1>
                    <div class="text-center">
                        <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                            <i class="fab fa-google-plus"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section-team text-center">
            <div class="container">
                <h2 class="text-center gold">  Мы создали услугу по созданию новогоднего настроения, которая не имеет аналогов в городе Харьков</h2>
                <h2 class="gold"> Jingle bells... <span>Скоро Новый Год и мы уже приготовились - собрали милые игрушки
                    эксклюзивных производителей Европы и США, вдохновились работами лучших декораторов
                    мира, создали несоклько вариантов авторских ёлок, а для особых ценителей новогоднего
                    настроения и чего-то новенького подготовили увлекательную программу по украшению ёлки
                    с Вашими близкими.</span></h2>
                <div class="team">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="team-player">
                                <img
                                        src="img/avatar.jpg"
                                        alt="Thumbnail Image"
                                        class="rounded-circle img-fluid img-raised"
                                />
                                <h2 class="title">Создадим полный look ёлки</h2>
                                <!--<p class="category text-primary">Model</p>-->
                                <p class="description text-left">
                                    Помощь в приобретении ёлки, игрушек и декора у производителей Европы и США по наилучшей цене в Украине<br>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team-player">
                                <img
                                        src="img/ryan.jpg"
                                        alt="Thumbnail Image"
                                        class="rounded-circle img-fluid img-raised"
                                />
                                <h2 class="title">Украсим ёлку</h2>
                                <!--<p class="category text-primary">Designer</p>-->
                                <p class="description">
                                    Декорирование ёлки и лайфхаки по оформлению Вашего дома
                                </p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="team-player">
                                <img
                                        src="img/eva.jpg"
                                        alt="Thumbnail Image"
                                        class="rounded-circle img-fluid img-raised"
                                />
                                <h2 class="title">А также послепраздничный разбор украишенийr</h2>
                                <!--<p class="category text-primary">Fashion</p>-->
                                <p class="description">
                                    После праздников приедем и наведем порядок
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="section section-about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Что мы делаем?</h2>
                        <!--<h5 class="description">-->
                            <!--Jingle bells... Скоро Новый Год и мы уже приготовились - собрали милые игрушки-->
                            <!--эксклюзивных производителей Европы и США, вдохновились работами лучших декораторов-->
                            <!--мира, создали несоклько вариантов авторских ёлок, а для особых ценителей новогоднего-->
                            <!--настроения и чего-то новенького подготовили увлекательную программу по украшению ёлки-->
                            <!--с Вашими близкими.-->
                        <!--</h5>-->
                    </div>
                </div>
                <div class="separator separator-primary"></div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <div
                                    class="image-container image-left"
                                    style="background-image: url('img/decor/art-deco-003.jpg')"
                            >
                                <!-- First image on the left side -->
                                <p class="blockquote blockquote-primary">
                                    "Over the span of the satellite record, Arctic sea ice has
                                    been declining significantly, while sea ice in the
                                    Antarctichas increased very slightly"
                                    <br />
                                    <br />
                                    <small>-NOAA</small>
                                </p>
                            </div>
                            <!-- Second image on the left side of the article -->
                            <div
                                    class="image-container"
                                    style="background-image: url('img/decor/art-deco-001.jpg')"
                            ></div>
                        </div>
                        <div class="col-md-5">
                            <!-- First image on the right side, above the article -->
                            <div
                                    class="image-container image-right"
                                    style="background-image: url('img/decor/art-deco-23.jpg')"
                            ></div>
                            <h3>
                                So what does the new record for the lowest level of winter ice
                                actually mean
                            </h3>
                            <p>
                                Jingle bells... Скоро Новый Год и мы уже приготовились - собрали милые игрушки
                                эксклюзивных производителей Европы и США, вдохновились работами лучших декораторов
                                мира, создали несоклько вариантов авторских ёлок, а для особых ценителей новогоднего
                                настроения и чего-то новенького подготовили увлекательную программу по украшению ёлки
                                с Вашими близкими.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section section-show-decor">
            <div class="container">
                <h2 class="title text-center">Вдохновляемся</h2>
                <div class="row">
                    <tabs
                            pills
                            class="nav-align-center"
                            tab-content-classes="gallery"
                            tab-nav-classes="nav-pills-just-icons"
                            type="primary"
                    >
                        <tab-pane title="Profile">
                            <i slot="label" class="now-ui-icons design_image"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img src="img/bg6.jpg" class="img-raised" />
                                        <img src="img/bg11.jpg" alt="" class="img-raised" />
                                    </div>
                                    <div class="col-md-6">
                                        <img src="img/bg7.jpg" alt="" class="img-raised" />
                                        <img src="img/bg8.jpg" alt="" class="img-raised" />
                                    </div>
                                </div>
                            </div>
                        </tab-pane>

                        <tab-pane title="Home">
                            <i slot="label" class="now-ui-icons location_world"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img src="img/bg1.jpg" alt="" class="img-raised" />
                                        <img src="img/bg3.jpg" alt="" class="img-raised" />
                                    </div>
                                    <div class="col-md-6">
                                        <img src="img/bg8.jpg" alt="" class="img-raised" />
                                        <img src="img/bg7.jpg" alt="" class="img-raised" />
                                    </div>
                                </div>
                            </div>
                        </tab-pane>

                        <tab-pane title="Messages">
                            <i slot="label" class="now-ui-icons sport_user-run"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img src="img/bg3.jpg" alt="" class="img-raised" />
                                        <img src="img/bg8.jpg" alt="" class="img-raised" />
                                    </div>
                                    <div class="col-md-6">
                                        <img src="img/bg7.jpg" alt="" class="img-raised" />
                                        <img src="img/bg6.jpg" class="img-raised" />
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

    export default {
        name: "Main",
        bodyClass: 'landing-page',
        components: {
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
            Tabs,
            TabPane,
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

</style>