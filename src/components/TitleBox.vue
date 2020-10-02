<template>
    <div class="titlebox">
        <h1>Eve Echoes Planetary Materials Lookup <small>{{ appVersion }}</small></h1>
    </div>
</template>

<script>
    export default {
        name: 'TitleBox',
        computed: {
            appVersion () {
                return process.env.VUE_APP_VERSION ? process.env.VUE_APP_VERSION : 'v1.7'
            }
        }
    }
</script>

<style scoped lang="scss">
    h1 {
        text-align: center;
        margin: 0;
        font-size: x-large;
    }

    @media only screen and (max-width: 1024px) {
        h1 {
            font-size: smaller;
        }
    }
</style>
