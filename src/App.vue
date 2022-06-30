<template>
  <MainPage />
</template>

<script>
import MainPage from "./components/pages/MainPage.vue";
export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
@import "./node_modules/css-reset-and-normalize/scss/reset-and-normalize";
@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  width: 100%;
  min-height: 1080px;
  background-image: url(assets/images/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: #1c1c1c;
  }
}

#app {
  color: #1c1c1c;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
}
</style>
