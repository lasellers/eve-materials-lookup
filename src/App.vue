<template>
    <div id="app">
        <TitleBox/>
        <LoaderBox/>

        <div class="mr-auto">
            <ul class="nav nav-tabs">
                <li class="nav-item active">
                    <router-link to="/home" class="nav-link">
                        Resources
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/suggestions" class="nav-link">
                        Suggestions
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/yields" class="nav-link">
                        Yields
                    </router-link>
                </li>
            </ul>
        </div>

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

            <div v-if="currentRouteName() !== '/yields'">

                <b>Resources</b>&nbsp;
                <div class="row">
                    <div class="col-md-3 col-lg-2">
                        <ResourcesBox box="0"/>
                    </div>
                    <div class="col-md-3 col-lg-2">
                        <ResourcesBox box="1"/>
                    </div>
                    <div class="col-md-3 col-lg-2">
                        <ResourcesBox box="2"/>
                    </div>
                    <div class="col-md-3 col-lg-2">
                        <ResourcesBox box="3"/>
                    </div>
                    <div class="col-md-3 col-lg-2">
                        <ResourcesBox box="4"/>
                    </div>
                </div>

                <BlueprintsBox/>

            </div>

        </div>

        <router-view/>

        <Notice/>

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
        created() {
            console.info('NODE_ENV', process.env.NODE_ENV)
            console.info('BASE_URL', process.env.BASE_URL)
            // console.info('PACKAGE_VERSION',process.env.PACKAGE_VERSION)
        },
        data() {
            return {}
        },
        computed: {

        },
        methods: {
            unimportant() {
                return !(window.innerWidth < 1024)
            },
            currentRouteName() {
                return this.$router.currentRoute.path;
            }
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
