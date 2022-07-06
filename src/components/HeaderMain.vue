<template>
  <div class="header-wrapper">
    <nav class="nav">
      <menu class="menu">
        <li>
          <a href="/"
            ><img src="../assets/images/home.svg" alt="home link"
          /></a>
        </li>
        <li v-for="item in getMenuItems" :key="item.id">
          <a :href="item.url" class="menu-item">{{ item.value }}</a>
        </li>
        <li
          class="burger"
          :class="{ active: this.$store.getters.getShowMenu }"
          @click="showBurgerMenu"
        ></li>
      </menu>
    </nav>
    <header class="header">
      <div class="services header-item">
        <p class="materials">
          <span class="header-attent"
            >Кровельные и фасадные <br />
            материалы</span
          >
          в Тюмени и области.
        </p>
        <p class="mounting">
          Профессиональный монтаж с <br />
          2010 года.
        </p>
      </div>
      <a class="price header-item" href="">
        <div class="price-logo">Pdf</div>
        <p class="header-link">
          <span class="header-attent">Скачать прайс-каталог</span>
        </p>
      </a>
      <div class="logo header-item">
        <img src="../assets/images/logo.png" alt="company logo" />
      </div>
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
      <div class="contacts header-item">
        <p class="working">
          <span class="header-attent">Пн-Пт</span> 9:00 - 18:00,
          <span class="header-attent">Сб</span> 10:00 - 18:00
        </p>
        <div class="call-wrapper" @click="changeCallModalRight">
          <p class="telephone">
            <span class="header-attent">8 (800) 222-54-60</span>
          </p>
          <p class="contacts-btn">
            <span class="header-attent header-link">Позвоните мне</span>
          </p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderMain",
  props: { menuItems: Array, socialItems: Array },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    showBurgerMenu() {
      this.$store.dispatch("callMenu", !this.$store.getters.getShowMenu);
    },

    changeCallModalRight() {
      this.$store.dispatch("setModalAbsoluteRight", "0px");
    },
  },

  computed: {
    ...mapGetters(["getMenuItems", "getSocialItems"]),
  },
};
</script>

<style scoped lang="scss">
.header-wrapper {
  display: flex;
  flex-direction: column;
  @media (max-width: 1110px) {
    padding: 0 5vw;
  }

  @media (max-width: 644px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0;
  }
  .nav {
    .menu {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0 1.35vw 1.82vw 0;
      margin-top: 43px;
      border-bottom: 1px solid rgba(28, 28, 28, 0.1);
      @media (max-width: 1220px) {
        padding: 0 0 1.82vw 0;
      }
      @media (max-width: 644px) {
        border-bottom: none;
      }

      li {
        list-style-type: none;
        &.burger {
          display: none;
          width: 20px;
          height: 15px;
          border-top: 2.13px solid #1c1c1c;
          border-bottom: 2.13px solid #1c1c1c;
          position: relative;
          transition: transform 0.8s ease-in-out;
          &:after {
            content: "";
            width: 20px;
            height: 0;
            position: absolute;
            border-bottom: 2.13px solid #1c1c1c;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          &.active {
            transform: rotate(90deg);
          }

          @media (max-width: 1111px) {
            display: block;
          }
          @media (max-width: 644px) {
            top: -10px;
          }
        }

        @media (max-width: 1111px) {
          &:not(:first-child):not(:last-child) {
            display: none;
          }
        }
        @media (max-width: 644px) {
          &:first-child {
            display: none;
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

        @media (max-width: 1220px) {
          letter-spacing: normal;
        }
      }
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    flex-wrap: wrap;
    gap: 0.781vw;
    @media (max-width: 1495px) {
      justify-content: center;
      gap: 4vw;
      row-gap: 1vw;
    }
    @media (max-width: 644px) {
      flex-wrap: nowrap;
    }

    .header-item {
      @media (max-width: 1111px) {
        &:not(:last-child):not(:nth-child(3)) {
          display: none;
        }
      }
    }
    .div {
      flex: 0 0 auto;
    }
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
      @media (max-width: 1324px) {
        flex-direction: column;
      }
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

    .logo {
      img {
        @media (max-width: 644px) {
          width: 75px;
          height: 52px;
        }
      }
      @media (max-width: 320px) {
        align-self: flex-start;
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
    .contacts {
      text-align: center;
      .call-wrapper {
        .telephone {
          font-size: 1.375rem;
          letter-spacing: 0.05em;
          margin: 6px 0;
          @media (max-width: 380px) {
            font-size: 17px;
          }
        }
      }
      @media (max-width: 380px) {
        padding-top: 10px;
        font-size: 10px;
      }
    }
  }
}
</style>
