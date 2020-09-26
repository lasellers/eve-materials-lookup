<template>
    <span class="spinner"></span>
</template>

<script>
    export default {
        name: 'Spinner'
    }
</script>

<style scoped lang="scss">
    .spinner {
        position: absolute;
        left: 50%;
        top: 6ex;
        z-index: 1;

        border: 16px solid #f3f3f3;
        border-top: 16px solid gray;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        margin: 0 0 0 -75px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(180deg); }
        100% { transform: rotate(360deg); }
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(180deg); }
        100% { transform: rotate(360deg); }
    }
</style>
