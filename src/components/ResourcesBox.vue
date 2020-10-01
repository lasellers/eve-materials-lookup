<template>
    <div id="resourcesbox">
        <b>Resources</b>&nbsp;
        <div class="row">
            <div class="col-md-3 col-lg-2">
                <ResourceBox box="0"/>
            </div>
            <div class="col-md-3 col-lg-2">
                <ResourceBox box="1"/>
            </div>
            <div class="col-md-3 col-lg-2">
                <ResourceBox box="2"/>
            </div>
            <div class="col-md-3 col-lg-2">
                <ResourceBox box="3"/>
            </div>
            <div class="col-md-3 col-lg-2">
                <ResourceBox box="4"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ResourceBox from "./ResourceBox.vue";

    export default {
        name: 'ResourcesBox',
        components: {
            ResourceBox
        },
    }
</script>

<style scoped lang="scss">
    select {
        margin: .25em;
    }

    option {
    }
</style>
