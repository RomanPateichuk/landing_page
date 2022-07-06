import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      showBurger: false,
      modalCallRight: "-1000px",
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
    };
  },

  getters: {
    getShowMenu(state) {
      return state.showBurger;
    },

    getCallModalRight(state) {
      return state.modalCallRight;
    },

    getMenuItems(state) {
      return state.menu_items;
    },

    getSocialItems(state) {
      return state.social_items;
    },
  },

  mutations: {
    setMenu: (state) => {
      state.showBurger = !state.showBurger;
    },

    setCallModalRight: (state, data) => {
      state.modalCallRight = data;
    },
  },

  actions: {
    callMenu: async (context) => {
      context.commit("setMenu");
    },

    setModalAbsoluteRight: async (context, data) => {
      context.commit("setCallModalRight", data);
    },
  },
});
