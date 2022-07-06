<template>
  <transition name="show">
    <div v-if="this.$store.getters.getShowMenu" class="header-wrapper-burger">
      <nav class="nav">
        <menu class="menu">
          <li class="home">
            <a href="/"
              ><img src="../assets/images/home.svg" alt="home link"
            /></a>
          </li>
          <li v-for="item in getMenuItems" :key="item.id">
            <a :href="item.url" class="menu-item">{{ item.value }}</a>
          </li>
        </menu>
      </nav>
      <header class="header">
        <div class="services header-item">
          <p class="materials">
            <span class="header-attent"
              >Кровельные и фасадные <br />
              материалы</span
            >
            в Тюмени и области. Профессиональный монтаж с <br />
            2010 года.
          </p>
        </div>
        <a class="price header-item" href="">
          <div class="price-logo">Pdf</div>
          <p class="header-link">
            <span class="header-attent">Скачать прайс-каталог</span>
          </p>
        </a>
        <div class="socials header-item">
          <p class="social-text">
            Отвечаем <span class="header-attent">онлайн</span>
          </p>

          <div class="social-items">
            <a
              v-for="item in getSocialItems"
              :key="item.id"
              :href="item.url"
              target="_blank"
            >
              <img
                :src="require(`../assets/images/${item.img}`)"
                :alt="item.alt"
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderBurger",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getMenuItems", "getSocialItems"]),
  },
};
</script>

<style scoped lang="scss">
.header-wrapper-burger {
  flex-direction: column;
  display: flex;

  &.show-enter,
  &.show-enter-active {
    opacity: 0;
  }

  &.show-enter-to {
    transition: opacity 1s ease;
    opacity: 1;
  }

  &.show-leave,
  &.show-leave-active {
    opacity: 1;
  }
  &.show-leave-to {
    transition: opacity 1s ease;
    opacity: 0;
  }

  .nav {
    .menu {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 1.35vw 1.82vw 0;
      margin-top: 43px;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      li {
        list-style-type: none;
        order: 2;
        &.home {
          display: none;
          @media (max-width: 644px) {
            display: block;
          }
        }
      }

      .menu-item {
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0 5px;
        &:hover {
          color: #f38120;
        }
      }
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.75rem;
    flex-wrap: wrap;
    gap: 25px;

    .header-attent {
      font-weight: 600;
    }

    .header-link {
      border-bottom: 2px solid #12c868;
      border-bottom-style: dotted;
      padding-bottom: 2px;
      letter-spacing: 0.04em;
    }
    .services {
      font-weight: 400;
      text-align: center;
      line-height: 1.125rem;
      .materials {
        padding-bottom: 0.875rem;
      }
    }

    .price {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .price-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.284vw;
        height: 2.284vw;
        font-size: 0.6875rem;
        background: #ffffff;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
        border-radius: 100px;
        color: #12c868;
        margin-right: 17.15px;
      }
    }

    .socials {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16.58px;
      .social-text {
        letter-spacing: 0.02em;
        position: relative;
        &::before {
          content: "";
          width: 4px;
          height: 4px;
          background: #12c868;
          border-radius: 100px;
          position: absolute;
          left: -8px;
          top: 4px;
        }
      }

      .social-items {
        a {
          &:not(:last-child) {
            margin-right: 14.75px;
          }
          img {
            &:hover {
              border-radius: 100%;
              outline: 2px solid #f38120;
              outline-offset: -1px;
            }
          }
        }
      }
    }
  }
}
</style>
