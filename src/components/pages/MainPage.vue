<template>
  <div class="main-wrapper">
    <header-main :menu-items="menu_items" :social-items="social_items" />
    <header-burger :menu-items="menu_items" :social-items="social_items" />
    <main>
      <aside-section />
      <main-section />
      <modal-form />
    </main>
  </div>
</template>

<script>
import HeaderMain from "../HeaderMain.vue";
import HeaderBurger from "../HeaderBurger.vue";
import MainSection from "../MainSection.vue";
import AsideSection from "../AsideSection.vue";
import ModalForm from "../ModalForm.vue";
export default {
  name: "MainPage",

  components: {
    HeaderMain,
    HeaderBurger,
    MainSection,
    AsideSection,
    ModalForm,
  },

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.main-wrapper {
  margin: 0 auto;
  padding: 0 9.11vw 5vw;
  position: relative;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1160px) {
    padding: 0 5vw 5vw;
  }
  @media (max-width: 1054px) {
    padding: 0 5vw 0;
  }

  main {
    display: flex;
    margin-top: 50px;
    position: relative;

    @media (max-width: 1054px) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
