<template>
    <div id="app">
        <TitleBox/>
        <LoaderBox/>

        <div class="mr-auto">
            <ul class="nav nav-tabs">
                <li class="nav-item active">
                    <router-link to="./resources" class="nav-link">
                        Resources
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="./suggestions" class="nav-link">
                        Suggestions
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="./yields" class="nav-link">
                        Yields
                    </router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="./home" class="nav-link">
                        Home
                    </router-link>
                </li>
            </ul>
        </div>


        <div v-if="!(currentRouteName().endsWith('/') || currentRouteName().endsWith('home') || currentRouteName().endsWith('stats'))">

            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-4 col-ld-4">
                        <RegionBox/>
                    </div>
                    <div class="col-md-1 col-lg-1 d-flex align-items-md-center" v-if="unimportant">
                        <b>And/Or</b>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <ConstellationBox/>
                    </div>
                    <div class="col-md-1 col-lg-1 d-flex align-items-md-center" v-if="unimportant">
                        <b>And/Or</b>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <SystemBox/>
                    </div>
                </div>

                <hr/>

                <div v-if="!currentRouteName().endsWith('yields')">
                    <ResourcesBox/>
                    <BlueprintsBox/>
                </div>

            </div>

        </div>

        <div class="container-fluid">
            <router-view/>
        </div>

        <Notice/>

        <div class="container-fluid">
            <p class="text-right">
            </p>
        </div>

    </div>
</template>

<script>
    import TitleBox from './components/TitleBox.vue'
    import LoaderBox from './components/LoaderBox.vue'
    import RegionBox from './components/RegionBox.vue'
    import ConstellationBox from './components/ConstellationBox.vue'
    import ResourcesBox from './components/ResourcesBox.vue'
    import Notice from './components/Notice.vue'
    import SystemBox from './components/SystemBox.vue'
    import BlueprintsBox from './components/BlueprintsBox.vue'

    export default {
        name: 'App',
        components: {
            TitleBox,
            LoaderBox,
            RegionBox,
            ConstellationBox,
            ResourcesBox,
            Notice,
            SystemBox,
            BlueprintsBox
        },
        data() {
            return {
                publicPath: process.env.BASE_URL
            }
        },
        created() {
            console.info('NODE_ENV', process.env.NODE_ENV)
            console.info('BASE_URL', process.env.BASE_URL)
            console.info('VUE_APP_VERSION', process.env.VUE_APP_VERSION)
            console.info('env', process.env)
        },
        methods: {
            unimportant() {
                return !(window.innerWidth < 1024)
            },
            currentRouteName() {
                return this.$router.currentRoute.path;
            },
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .nav-item a {
        color: black;
        font-weight: bold;
    }

    a.router-link-active {
        background-color: #e3e3e3;
    }

    @media only screen and (max-width: 1024px) {
        body, p, th, td {
            font-size: 90%;
        }
    }
</style>
