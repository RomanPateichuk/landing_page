<template>
  <div class="modal-request-wrapper" :style="{ right: getCallModalRight }">
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
        <img src="../assets/images/arrow-form.svg" alt="arrow" />
      </button>
      <div class="check-wrapper">
        <input id="in-check" class="in-check" type="checkbox" required />
        <label for="in-check" class="lab-check"
          >Нажимая кнопку вы соглашаетесь с условиями <br />
          <a class="link-check" href="">Политики конфиденциальности</a></label
        >
      </div>
    </form>
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ModalForm",
  directives: {
    mask: mask,
  },
  data() {
    return {
      phone_number: "",
    };
  },

  computed: {
    ...mapGetters(["getCallModalRight"]),
  },

  methods: {
    ...mapActions(["setModalAbsoluteRight"]),
    modalCallClose() {
      this.setModalAbsoluteRight("-1000px");
    },
  },
};
</script>
<style scope lang="scss">
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
      @media (max-width: 700px) {
        height: 25px;
        width: 4px;
      }
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
</style>
