<template>
    <div class="titlebox">
        <h1>Eve Echoes Planetary Materials Lookup</h1>
        <div class="row">
            <div class="col-12">Resources Count: {{resourcesCount}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TitleBox',
        data() {
            return {
                resourcesCount: 0
            }
        },
        created() {
            this.onFileLoad()
        },
        methods: {
            onFileLoad: function () {
                this.resourcesCount = this.$store.getters.resourcesCount
            },
        }
    }
</script>

<style scoped lang="scss">
    h1 {
        margin: 0 0 0 0;
    }

    a {
        color: #42b983;
    }
</style>
