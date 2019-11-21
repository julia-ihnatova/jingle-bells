<template>
    <div>
        <div class="page-header page-header-small">
            <parallax
                    class="page-header-image"
                    style="background-image: url('img/ourBg.jpg')"
            >
            </parallax>
            <div class="content-center">
                <div class="container">
                    <h1 class="title">Авторские новогодние ёлки!</h1>
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
        <div class="section section-team text-left">
            <div class="container">
                <h2 class="title text-center">Что входит в программу</h2>
                <div class="team">
                    <div class="row">
                        <div class="col-md-4">
                            <p class="blockquote blockquote-primary">
                                <small>Создадим полный look ёлки и игрушек</small><br>
                                Наш декор от лучших производителей Европы и США
                                <br />
                                <!--<small>-NOAA</small>-->
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p class="blockquote blockquote-primary">
                                <small>Украсим ёлку и помещение</small>

                                <br />
                                <br />
                                <!--<small>-NOAA</small>-->
                            </p>
                        </div>

                            <div class="col-md-4">
                                <p class="blockquote blockquote-primary">
                                    <small>А также послепраздничный разбор украишений</small>
                                    <br />
                                    <br />
                                    <!--<small>-NOAA</small>-->
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
            TabPane
        },
        data() {
            return {
                form: {
                    firstName: '',
                    email: '',
                    message: ''
                }
            };
        }
    }
</script>

<style scoped>

</style>