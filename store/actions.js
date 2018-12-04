import axios from "axios";
import * as api from "@/api";

const actions = {
  async login({ commit }, { email, password }) {
    const { accessToken } = await api.auth.login(email, password);
    commit("login", accessToken);
  },
  async getTextData({ commit }) {
    const { data } = await axios.get("/data.json");
    commit("setTextData", data);
  },
  complete({ state, commit }) {
    commit("setActiveIdx", state.activeIdx + 1);
    if (state.activeIdx > state.data.length) {
      commit("stopTimer");
      commit("resetTyping");
      commit("setActiveIdx", 0);
    }
  },
  startTimer({ state, commit }) {
    commit(
      "setMyTimer",
      setInterval(() => {
        commit("setTime", state.time + 1);
        commit("updateRank");
      }, 1000)
    );
  }
};

export default actions;
