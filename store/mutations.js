import * as util from "@/utils/util";
import { setAuthInHeader } from "@/api";

const mutations = {
  login(state, payload) {
    if (!payload) return;
    state.token = payload;
    localStorage.setItem("token", payload);
    setAuthInHeader(payload);
  },
  logout(state) {
    state.token = null;
    delete localStorage.token;
    setAuthInHeader(null);
  },
  setTextData(state, payload) {
    state.data = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setSuccessed(state) {
    state.isSuccess = false;
  },
  setActiveIdx(state, payload) {
    state.activeIdx = payload;
  },
  setTime(state, payload) {
    state.time = payload;
  },
  setMyTimer(state, payload) {
    state.myTimer = payload;
  },
  insertRank(state) {
    const newRank = [
      ...state.rank,
      {
        user: state.user,
        time: state.time
      }
    ];
    state.rank = util.sortRank(newRank);
  },
  updateRank(state) {
    const newRank = state.rank.map(user =>
      user.user === state.user ? { ...user, time: state.time } : user
    );
    state.rank = util.sortRank(newRank);
  },
  stopTimer(state) {
    clearInterval(state.myTimer);
  },
  resetTyping(state) {
    state.isSuccess = true;
    state.user = "";
    state.time = 0;
  }
};

export default mutations;
