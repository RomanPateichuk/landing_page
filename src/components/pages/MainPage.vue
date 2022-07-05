<template>
  <div class="main-wrapper">
    <HeaderWrapperMain :menu-items="menu_items" :social-items="social_items" />
    <HeaderWrapperBurger
      :menu-items="menu_items"
      :social-items="social_items"
    />
    <main>
      <aside class="aside" :class="{ active: showAside }">
        <div
          class="aside-btn"
          :class="{ active: showAside }"
          @click="showAside = !showAside"
        ></div>
        <p class="click-plus-description">
          Нажмите на плюсик, чтобы увидеть все преимущества работы с нами
        </p>
        <div
          class="aside-item"
          v-for="item in aside_items"
          :key="item.id"
          v-html="item.content"
        ></div>
      </aside>

      <section class="main-section">
        <h1 class="main-h">
          Продажа <span>кровельных материалов</span> в Тюмени и Тюменской
          области
        </h1>
        <p class="main-description">и монтаж под ключ</p>
        <div class="main-btn-wrapper">
          <button class="calculate main-btn">
            <p class="btn-text">Рассчитать стоимость материалов и монтажа</p>
            <img src="../../assets/images/arrow.svg" alt="arrow" />
          </button>
          <button class="write main-btn">
            <p class="btn-text">записаться на просмотр объектов</p>
            <img src="../../assets/images/arrow.svg" alt="arrow" />
          </button>
        </div>
        <a class="answer-wrapper" href="">
          <img src="../../assets/images/icon_click.png" alt="click to answer" />
          <p class="answer-text">
            <span>Ответьте на несколько вопросов и получите</span> сметную
            стоимость и 3 подарка за экономию нашего времени
          </p>
        </a>
      </section>
      <div
        class="modal-request-wrapper"
        :style="{ right: this.$store.getters.getCallModalRight }"
      >
        <div class="close" @click="modalCallClose"></div>
        <h2 class="modal-title">Быстро <br />оставить заявку</h2>
        <p class="modal-description">
          Введите номер, мы позвоним вам <br />
          в течение 10 минут в рабочее время
        </p>
        <p class="modal-time">Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00</p>
        <form class="modal-form" method="get">
          <label for="in-phone" class="lab-phone">Введите номер телефона</label>
          <input
            id="in-phone"
            v-model="phone_number"
            type="tel"
            ref="input"
            class="in-phone"
            v-mask="'+7(###)-##-##-##'"
            placeholder="+7 (_ _ _) _ _-_ _-_ _"
            required
          />
          <button class="in-sub" type="submit">
            позвонить мне
            <img src="../../assets/images/arrow-form.svg" alt="arrow" />
          </button>
          <div class="check-wrapper">
            <input id="in-check" class="in-check" type="checkbox" required />
            <label for="in-check" class="lab-check"
              >Нажимая кнопку вы соглашаетесь с условиями <br />
              <a class="link-check" href=""
                >Политики конфиденциальности</a
              ></label
            >
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import HeaderWrapperMain from "../HeaderWrapperMain.vue";
import HeaderWrapperBurger from "../HeaderWrapperBurger.vue";
export default {
  name: "MainPage",
  directives: {
    mask: mask,
  },
  components: { HeaderWrapperMain, HeaderWrapperBurger },
  computed: {},
  methods: {
    modalCallClose() {
      this.$store.dispatch("setModalAbsoluteRight", "-1000px");
    },
  },

  data() {
    return {
      phone_number: "",
      showAside: false,
      menu_items: [
        { id: 1, value: "Каталог", url: "/" },
        { id: 2, value: "Преимущества", url: "/" },
        { id: 3, value: "Примеры работ", url: "/" },
        { id: 4, value: "Монтаж", url: "/" },
        { id: 5, value: "Отзывы", url: "/" },
        { id: 6, value: "Ответы на вопросы", url: "/" },
        { id: 7, value: "Контакты", url: "/" },
      ],
      social_items: [
        {
          id: 1,
          url: "viber://chat?number=%2B375298011578",
          img: "viber_icon.svg",
          alt: "viber application",
        },
        {
          id: 2,
          url: "https://wa.me/375259141275?text=Привет!",
          img: "watsApp_icon.svg",
          alt: "watsApp application",
        },
        {
          id: 3,
          url: "https://telegram.me/Roman914",
          img: "telegram_icon.svg",
          alt: "telegram aplication",
        },
      ],
      aside_items: [
        {
          id: 1,
          content:
            "<strong>Гарантия от 50 лет</strong> <br /> на материалы и 5 лет на монтаж",
        },
        {
          id: 2,
          content:
            "<strong>Замер, монтажный <br />проект</strong>и <br />еще 4 услуги <br />бесплатно",
        },
        { id: 3, content: "<strong>Сметы <br />точны</strong> до копейки" },
        {
          id: 4,
          content:
            "<strong> Поэтапная оплата,</strong> <br />кредит или рассрочка",
        },
        {
          id: 5,
          content:
            " <strong>Наши крыши в <br />каждом поселке</strong> и дачном сообществе региона",
        },
      ],
    };
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
    .aside {
      display: flex;
      background-color: #ffff;
      flex-direction: column;
      border-radius: 0 25px 20px 20px;
      width: 265px;
      height: 626px;
      align-items: center;
      justify-content: space-between;
      position: relative;
      box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.03);
      padding: 65px 35px 41px 35px;
      -webkit-transition: height 0.5s;
      transition: height 0.5s;
      &::before {
        display: block;
        content: "";
        width: 94%;
        height: 30px;
        position: absolute;
        top: 1px;
        left: 0;
        border-radius: 20px 0 0 0;
        transform: translateY(-100%);
        background: linear-gradient(
          to top right,
          #ffff 50%,
          rgba(255, 0, 0, 0) 52%
        );
      }

      .aside-item {
        text-align: center;
        line-height: 22px;
        min-height: 88px;
        &:not(:last-child)::after {
          content: url("../../assets/images/aside_shadow.png");
        }

        @media (max-width: 1054px) {
          &:nth-child(2) {
            order: 1;
          }
          &:nth-child(3) {
            order: 3;
          }
          &:nth-child(4) {
            order: 4;
          }
          &:nth-child(4) {
            order: 5;
          }
          &:nth-child(5) {
            order: 6;
          }
          &:nth-child(6) {
            order: 7;
          }
        }
      }

      .aside-btn {
        display: none;
        width: 33px;
        min-height: 33px;
        background-color: #f38120;
        border-radius: 50%;
        position: relative;
        align-self: flex-end;

        &:after,
        &:before {
          content: "";
          width: 10px;
          position: absolute;
          border: 1px solid #ffff;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.5s ease-in-out;
        }

        &:before {
          content: "";
          width: 10px;
          position: absolute;
          border: 1px solid #ffff;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(90deg);
        }

        &.active {
          &:after,
          &:before {
            width: 20px;
          }

          &:after {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          &:before {
            transform: translate(-50%, -50%) rotate(-45deg);
          }
        }
        @media (max-width: 1054px) {
          display: block;
        }
      }
      .click-plus-description {
        display: none;
        text-align: center;
        color: #b5b5b5;
        margin: 1.7rem 0;
        @media (max-width: 1054px) {
          display: block;
          order: 2;
        }
      }

      @media (max-width: 1054px) {
        margin-top: 75px;
        order: 2;
        height: 245px;
        border-radius: 0 25px 0 0;
        padding: 25px 15px 41px;
        &.active {
          height: 626px;
        }
      }
    }
    .main-section {
      padding-left: 45px;
      padding-top: 28px;
      width: 100%;

      @media (max-width: 1054px) {
        padding-left: 0;
        padding-top: 0;
        display: flex;
        flex-direction: column;
      }
      .main-h {
        width: 50vw;
        font-weight: 300;
        font-size: 3.4375rem;
        line-height: 85px;
        span {
          font-weight: 600;
        }
        @media (max-width: 1289px) {
          width: auto;
        }
        @media (max-width: 1054px) {
          text-align: center;
          line-height: 75px;
        }
        @media (max-width: 500px) {
          line-height: 35px;
          font-size: 25px;
        }
      }

      .main-description {
        font-size: 2rem;
        line-height: 39px;
        position: relative;
        padding-left: 65px;
        margin-top: 18px;
        &::before {
          content: url("../../assets/images/circles.svg");
          position: absolute;
          left: -9px;
        }
        @media (max-width: 1054px) {
          display: table;
          margin: 2% auto;
        }
        @media (max-width: 500px) {
          font-size: 16px;
        }
      }
      .main-btn-wrapper {
        display: flex;
        flex-wrap: wrap;
        order: 2;
        @media (max-width: 1054px) {
          justify-content: space-around;
        }
        .main-btn {
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          height: 100px;
          border: none;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
          border-radius: 500px;
          padding: 30px;
          margin-top: 45px;
          @media (max-width: 805px) {
            width: 60%;
          }
          @media (max-width: 651px) {
            width: 85%;
          }
          @media (max-width: 427px) {
            width: 95%;
            font-size: 10px;
          }

          &.calculate {
            width: 375px;
            background-color: rgba(18, 200, 104, 1);

            &:hover {
              background-color: #21e27c;
            }
          }

          &.write {
            width: 335px;
            background: #f38120;
            margin-left: 15px;

            &:hover {
              background-color: #fd9c49;
            }
          }

          .btn-text {
            width: 80%;
          }
        }
      }
      .answer-wrapper {
        display: flex;
        align-items: flex-start;
        margin-top: 4vw;
        @media (max-width: 1054px) {
          flex-direction: column;
          gap: 2vh;
          justify-content: center;
          align-items: center;
          order: 1;
        }
        .answer-text {
          width: 19%;
          font-weight: 400;
          line-height: 22px;
          text-align: center;
          letter-spacing: 0.02em;
          @media (max-width: 1054px) {
            width: 50%;
          }
          span {
            font-weight: 600;
          }
        }

        img {
          margin-right: 0.3125rem;
        }
      }
    }
    @media (max-width: 1054px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .modal-request-wrapper {
    display: block;
    background: #f5f5f5;
    min-width: 550px;
    min-height: 650px;
    border-radius: 2.1875rem;
    padding: 3.4% 2% 4.5%;
    position: absolute;
    transition: right 0.5s;
    .close {
      position: absolute;
      right: 43px;
      top: 40px;
      width: 2vw;
      height: 2vw;
      opacity: 0.3;

      @media (max-width: 500px) {
        top: 20px;
      }

      &:hover {
        opacity: 1;
      }

      &:before,
      &:after {
        position: absolute;
        left: 20px;
        content: " ";
        height: 33px;
        width: 5px;
        background-color: #a0a0a0;
      }
      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
    .modal-title {
      font-size: 1.875rem;
      line-height: 150%;
      text-align: center;
      letter-spacing: 0.02em;
    }

    .modal-description {
      font-size: 1rem;
      line-height: 190%;
      text-align: center;
      color: #000000;
    }

    .modal-time {
      font-size: 0.75rem;
      line-height: 5%;
      text-align: center;
      color: #000000;
      opacity: 0.75;
      padding: 24px 0 28px;
    }

    .modal-form {
      margin-top: 1.2%;
      .lab-phone {
        display: block;
        font-size: 0.75rem;
        color: #000000;
        opacity: 0.75;
        margin-left: 25%;
        margin-bottom: 19px;
      }

      .in-phone {
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        border: none;
        width: 76%;
        height: 5.3125rem;
        background: #ffffff;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
        border-radius: 500px;
        text-align: center;
        caret-color: transparent;
        font-size: 1.125rem;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #a7a7a7;
        &:active,
        &:focus {
          outline: 2px solid #f38120;
          outline-offset: -1px;
        }
        &::placeholder {
          font-size: 1.125rem;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #a7a7a7;
        }
        &::-webkit-input-placeholder {
          text-align: center;
        }
      }

      .in-sub {
        width: 76%;
        outline: none;
        height: 5.3125rem;
        background: #f38120;
        box-shadow: inset 0px 0px 17px rgba(255, 255, 255, 0.25);
        border-radius: 500px;
        font-weight: 600;
        font-size: 1rem;
        line-height: 20px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        justify-content: center;
        color: #ffffff;
        border: none;
        margin: 24px auto 30px;
        img {
          margin-left: 5%;
        }
        &:hover {
          background-color: #f5a157;
        }
      }

      .check-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .in-check {
          appearance: none;
          width: 18px;
          height: 17.65px;
          background: #f38120;
          border-radius: 25%;
          position: relative;

          &:checked {
            &:after {
              content: "\2714";
              width: 50%;
              height: 50%;
              color: #ffffff;
              position: absolute;
              top: 6%;
              left: 22%;
            }
          }
        }

        .lab-check {
          font-weight: 500;
          font-size: 0.75rem;
          line-height: 21px;
          margin-left: 19px;
          width: 65%;
          .link-check {
            color: #f38120;
          }
        }
      }
    }
    @media (max-width: 588px) {
      min-width: 75vw;
      min-height: 30vh;
    }
  }
}
</style>
