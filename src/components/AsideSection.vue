<template>
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
</template>

<script>
export default {
  name: "AsideSection",

  data() {
    return {
      showAside: false,
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
      content: url("../assets/images/aside_shadow.png");
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
</style>
