<template>
    <div id="app">
        <TitleBox/>
        <LoaderBox/>

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

        <DisplayedResources/>
        <Notice/>

    </div>
</template>

<script>
    import TitleBox from './components/TitleBox.vue'
    import LoaderBox from './components/LoaderBox.vue'
    import RegionBox from './components/RegionBox.vue'
    import ConstellationBox from './components/ConstellationBox.vue'
    import ResourcesBox from './components/ResourcesBox.vue'
    import DisplayedResources from '@/components/DisplayedResources'
    import Notice from './components/Notice.vue'
    import SystemBox from './components/SystemBox.vue'
    import BlueprintsBox from './components/BlueprintsBox.vue'

    export default {
        name: 'App',
        components: {
            DisplayedResources,
            TitleBox,
            LoaderBox,
            RegionBox,
            ConstellationBox,
            ResourcesBox,
            Notice,
            SystemBox,
            BlueprintsBox
        },
        computed: {
            unimportant() {
                return !(window.innerWidth < 1024)
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

    .stats {
        text-align: center;
    }

    @media only screen and (max-width: 1024px) {
        body, p, th, td {
            font-size: 90%;
        }
    }
</style>
