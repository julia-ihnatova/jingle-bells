<template>
    <div>
        <div class="page-header page-header-small absolute-title">
            <parallax
                    class="page-header-image"
                    style="background-image:url('img/decor/elka-green.jpg')"
            ></parallax>
            <div class="content-center">
                <div class="container">
                    <div class="top-title">
                        <h2>Как с нами связаться</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <p>Приглашаем Вас к нам в студию по адресу г. Харьков, ул. Гольдберговская, 9.<br>
                            За чаем с печеньем продолжим создание Вашего проекта Новогоднего пространства </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <google-map />
                    </div>
                    <div class="col-sm-6">
                        <p><span>Наш адрес: </span>г. Харьков, ул. Гольдберговская, 9</p>
                        <p><span>Телефон: </span> +38 098 930 27 28</p>
                        <p><span>Время работы: </span> 09:00 - 19:00, выходной воскресенье</p>
                        <div class="social-connect">
                            <p>Связь в мессенджерах:</p>
                            <a
                                    class="mr-5"
                                    rel="tooltip"
                                    title="Connect Telegramm"
                                    href="tg://resolve?domain=Nikasdecorhome"
                                    target="_blank"
                            >
                                <i class="fab fa-telegram"></i>
                            </a>

                            <a href="viber://add?number=+380989302728" v-if="isMobile()">
                                <i class="fab fa-viber"></i>
                            </a>
                            <a title="Должен быть установлен Viber для ПК" v-if="!isMobile()"
                               href="viber://chat?number=+380989302728"
                               target="_blank">
                                <i class="fab fa-viber"></i>
                            </a>

                            <a
                                    class="ml-5"
                                    rel="tooltip"
                                    title="Connect INstagram"
                                    href="https://www.instagram.com/nikasdecor/"
                                    target="_blank"
                            >
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>




    </div>
</template>

<script>
    import { Parallax } from '@/components';

    import GoogleMap from "./components/GoogleMap";
    import mixinDetictingMobile from './mixinDetictingMobile.js'

    export default {
        name: "Price",
        mixins: [mixinDetictingMobile],
        components: {
            Parallax,
            GoogleMap

    },
    }
</script>


<style scoped>
    .page-header .content-center{
        top: 37%;
        position: absolute;
    }

    .page-header h2{
        padding-top: 30px;
    }

    .social-connect i{
        font-size: 5em;
    }
</style>