<template>
  <div class="main-wrapper">
    <div class="header-wrapper">
      <nav class="nav">
        <menu class="menu">
          <li>
            <a href="/"
              ><img src="../../assets/images/home.svg" alt="home link"
            /></a>
          </li>
          <li><a href="/" class="menu-item">Каталог</a></li>
          <li><a href="/" class="menu-item">Преимущества</a></li>
          <li><a href="/" class="menu-item">Примеры работ</a></li>
          <li><a href="/" class="menu-item">Монтаж</a></li>
          <li><a href="/" class="menu-item">Отзывы</a></li>
          <li><a href="/" class="menu-item">Ответы на вопросы</a></li>
          <li><a href="/" class="menu-item">Контакты</a></li>
        </menu>
        <div class="burger"></div>
      </nav>
      <header class="header">
        <div class="services">
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
        <div class="price">
          <div class="price-logo">Pdf</div>
          <a class="header-link"
            ><span class="header-attent">Скачать прайс-каталог</span></a
          >
        </div>
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="company logo" />
        </div>
        <div class="socials">
          <p class="social-text">
            Отвечаем <span class="header-attent">онлайн</span>
          </p>
          <div class="social-items">
            <a href="viber://chat?number=%2B375298011578" target="_blank">
              <img
                src="../../assets/images/watsApp_icon.svg"
                alt="watsApp application"
              />
            </a>
            <a href="https://wa.me/375259141275?text=Привет!" target="_blank">
              <img
                src="../../assets/images/viber_icon.svg"
                alt="viber application"
              />
            </a>
            <a href="https://telegram.me/Roman914" target="_blank">
              <img
                src="../../assets/images/telegram_icon.svg"
                alt="telegram aplication"
              />
            </a>
          </div>
        </div>
        <div class="contacts">
          <p class="working">
            <span class="header-attent">Пн-Пт</span> 9:00 - 18:00,
            <span class="header-attent">Сб</span> 10:00 - 18:00
          </p>
          <p class="telephone">
            <span class="header-attent">8 (800) 222-54-60</span>
          </p>
          <p class="contacts-btn">
            <span class="header-attent header-link">Позвоните мне</span>
          </p>
        </div>
      </header>
    </div>
    <main>
      <aside class="aside">
        <div class="aside-item">
          <span class="asside-attent">Гарантия от 50 лет</span> <br />
          на материалы и 5 лет на монтаж
          <img
            src="../../assets/images/aside_shadow.png"
            alt="aside item shadow"
          />
        </div>
        <div class="aside-item">
          <span class="asside-attent"
            >Замер, монтажный <br />
            проект</span
          >
          и <br />еще 4 услуги <br />бесплатно
          <img
            src="../../assets/images/aside_shadow.png"
            alt="aside item shadow"
          />
        </div>
        <div class="aside-item">
          <span class="asside-attent">
            Сметы <br />
            точны</span
          >
          до копейки
          <img
            src="../../assets/images/aside_shadow.png"
            alt="aside item shadow"
          />
        </div>
        <div class="aside-item">
          <span class="asside-attent"> Поэтапная оплата,</span> <br />
          кредит или рассрочка
          <img
            src="../../assets/images/aside_shadow.png"
            alt="aside item shadow"
          />
        </div>
        <div class="aside-item">
          <span class="asside-attent">Наши крыши в <br />каждом поселке</span> и
          дачном сообществе региона
        </div>
      </aside>

      <section class="main-section">
        <h1 class="main-h">
          Продажа <span>кровельных материалов</span> в Тюмени и Тюменской
          области
        </h1>
        <p class="main-description">и монтаж под ключ</p>
        <button class="calculate main-btn">
          <p class="btn-text">Рассчитать стоимость материалов и монтажа</p>
          <img src="../../assets/images/arrow.svg" alt="arrow" />
        </button>
        <button class="write main-btn">
          <p class="btn-text">записаться на просмотр объектов</p>
          <img src="../../assets/images/arrow.svg" alt="arrow" />
        </button>
        <div>
          <p class="answer-block">
            <span>Ответьте на несколько вопросов и получите</span> сметную
            стоимость и 3 подарка за экономию нашего времени
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.main-wrapper {
  margin: 0 auto;
  padding: 0 9.11vw;
  .header-wrapper {
    display: flex;
    flex-direction: column;
    @media (max-width: 1110px) {
      padding: 0 5vw;
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

        li {
          list-style-type: none;
        }

        .menu-item {
          font-weight: 500;
          line-height: 140%;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0 5px;
          color: #1c1c1c;
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
          font-size: 11px;
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
          }
        }
      }
      .contacts {
        text-align: center;
        .telephone {
          font-size: 22px;
          letter-spacing: 0.05em;
          margin: 6px 0;
        }
      }
    }
  }

  main {
    display: flex;
    margin-top: 50px;
    .aside {
      display: flex;
      flex-direction: column;
      border-radius: 0 0 20px 20px;
      width: 265px;
      min-height: 626px;
      align-items: center;
      justify-content: space-between;

      position: relative;
      box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.03);
      padding: 65px 35px 41px 35px;
      .asside-attent {
        font-weight: 700;
      }
      &::before {
        display: block;
        content: "";
        width: 100%;
        height: 30px;
        background: black;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        background: linear-gradient(
          to top right,
          #ffffff 50%,
          rgba(255, 0, 0, 0) 52%
        );
      }

      .aside-item {
        text-align: center;
        line-height: 22px;
        min-height: 88px;
      }
    }
    .main-section {
      padding-left: 45px;
      padding-top: 28px;
      width: 100%;
      .main-h {
        width: 41.5rem;
        font-weight: 300;
        font-size: 55px;
        line-height: 85px;
        span {
          font-weight: 600;
        }
      }

      .main-description {
        font-size: 32px;
        line-height: 39px;
        position: relative;
        padding-left: 65px;
        margin-top: 18px;
        &::before {
          content: url("../../assets/images/circles.svg");
          position: absolute;
          left: -9px;
        }
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
        padding-left: 53px;

        margin-top: 45px;
        &.calculate {
          width: 375px;
          background-color: rgba(18, 200, 104, 1);
          text-align: justify;
          padding-right: 55px;
        }

        &.write {
          width: 335px;
          background: #f38120;
          margin-left: 15px;
          padding-right: 43px;
        }

        .btn-text {
          width: 80%;
        }
      }

      .answer-block {
        width: 19%;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.02em;
        margin-left: 30px;
        margin-top: 40px;
        position: relative;
        &::before {
          content: url("../../assets/images/icon_click.png");
          position: absolute;
          left: -40px;
          top: 5px;
        }
        span {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
