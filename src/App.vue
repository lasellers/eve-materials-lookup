<template>
    <div id="app">
        <div class="row">
            <div class="col-2">
                <LoaderBox/>
            </div>
            <div class="col-10">
                <TitleBox/>
            </div>
        </div>

        <div class="row">
            <div class="col-5">
                <RegionBox/>
            </div>
            <div class="col-2">
                <b>Or</b>
            </div>
            <div class="col-5">
                <ConstellationBox/>
            </div>
        </div>

        <div class="row">
            <div class="col-1">
                Resources:
            </div>
            <div class="col-2">
                <ResourcesBox box="0"/>
            </div>
            <div class="col-2">
                <ResourcesBox box="1"/>
            </div>
            <div class="col-2">
                <ResourcesBox box="2"/>
            </div>
            <div class="col-2">
                <ResourcesBox box="3"/>
            </div>
            <div class="col-2">
                <ResourcesBox box="4"/>
            </div>
        </div>
        <DisplayedResources/>
    </div>
</template>

<script>
    import TitleBox from './components/TitleBox.vue'
    import LoaderBox from './components/LoaderBox.vue'
    import RegionBox from './components/RegionBox.vue'
    import ConstellationBox from './components/ConstellationBox.vue'
    import ResourcesBox from './components/ResourcesBox.vue'
    import DisplayedResources from '@/components/DisplayedResources'

    export default {
        name: 'App',
        components: {
            DisplayedResources,
            TitleBox,
            LoaderBox,
            RegionBox,
            ConstellationBox,
            ResourcesBox
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
