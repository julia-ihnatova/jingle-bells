<template>
    <div>
        <gmap-map
                :center="center"
                :zoom="12"
                style="width:100%;  height: 400px;"
        >
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "GoogleMap",
        data() {
            return {
                center: { lat: 49.976493, lng: 36.248867 },
                markers: [{position: {lat: 49.976493, lng: 36.248867}}],
            };
        },

        mounted() {

        },

        methods: {
        }
    }
</script>

<style scoped>

</style>