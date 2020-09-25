<template>
    <div class="titlebox">
        <h1>Eve Echoes Planetary Materials Lookup <small>v1.4 beta<!--process.env.PACKAGE_VERSION--></small></h1>
    </div>
</template>

<script>
    export default {
        name: 'TitleBox'
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
