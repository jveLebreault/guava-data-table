<template>
    <div class="backdrop">
        <div class="spinner__container">
            <div class="spinner">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'spinner',

}
</script>

<style scoped>
    .backdrop {
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(170,170,170,0.4);
        z-index: 1000;
    }

    .spinner__container {
        background-color: white;
        width: 25%;
        height: 25%;
        margin: 15% auto;
        border-radius: 5%;
    }

    .spinner {
        width: 6rem;
        height: 6rem;
        border-top-color: #444;
        border-left-color: #444;
        margin: 15% 40%;

        animation: spinner 400ms linear infinite;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-style: solid;
        border-width: 2px;
        border-radius: 50%;  
        box-sizing: border-box;
        display: inline-block;
        vertical-align: middle;
    }

    @keyframes spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
