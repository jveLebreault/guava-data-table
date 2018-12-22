<template>
    <div class="">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a href="https://www.britecore.com/" class="navbar-item">
                    <img alt="Britecore logo" src="./assets/images/britecore-logo.png" width="112" height="28">
                </a>
        
                <a role="button" class="navbar-burger" @click="toggleActive" :class="{'is-active': isActive}" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu" :class="{'is-active': isActive}">
                <div class="navbar-start">
                <a href="#" class="navbar-item">Home</a>
                
                <a href="#" class="navbar-item">Test repo</a>
                </div>
            </div>
        </nav>

        <div id="app" class="container">
            <PaymentHistory />
        </div>
    </div>
</template>

<script>
import PaymentHistory from "./components/PaymentHistory.vue";

export default {
    name: "app",
    components: {
        PaymentHistory
    },

    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    },

    data() {
        return {
            isActive: true
        };
    }
};
</script>

<style>
@import "~bulma/css/bulma.min.css";
@import "~typicons.font/src/font/typicons.css";
</style>
