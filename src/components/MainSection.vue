<template>
  <section class="main-section">
    <h1 class="main-h">
      Продажа <span>кровельных материалов</span> в Тюмени и Тюменской области
    </h1>
    <p class="main-description">и монтаж под ключ</p>
    <div class="main-btn-wrapper">
      <button class="calculate main-btn">
        <p class="btn-text">Рассчитать стоимость материалов и монтажа</p>
        <img src="../assets/images/arrow.svg" alt="arrow" />
      </button>
      <button class="write main-btn">
        <p class="btn-text">записаться на просмотр объектов</p>
        <img src="../assets/images/arrow.svg" alt="arrow" />
      </button>
    </div>
    <a class="answer-wrapper" href="">
      <img src="../assets/images/icon_click.png" alt="click to answer" />
      <p class="answer-text">
        <span>Ответьте на несколько вопросов и получите</span> сметную стоимость
        и 3 подарка за экономию нашего времени
      </p>
    </a>
  </section>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
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
      content: url("../assets/images/circles.svg");
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
</style>
