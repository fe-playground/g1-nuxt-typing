<template>
  <div class="inputBox shadow">
    <input
      v-model="user"
      :readonly="!isSuccess"
      type="text"
      placeholder="사용자 이름 입력"
      @keyup.enter="start"
    />
    <span
      class="startContainer"
      @click="start"
    >
      <i class="fas fa-play btnStart"></i>
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["isSuccess", "rank"]),
    ...mapActions(["startTimer"]),
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit("setUser", value);
      }
    }
  },
  watch: {
    isSuccess() {
      if (this.isSuccess) this.user = "";
    }
  },
  methods: {
    ...mapMutations(["insertRank", "setSuccessed"]),
    startTyping() {
      this.$store.dispatch("startTimer");
      this.$store.commit("insertRank");
      this.$store.commit("setSuccessed");
    },
    start() {
      if (!this.user.trim()) {
        this.$EventBus.$emit("modal-alert", "사용자 이름을 등록해주세요.");
      } else if (this.checkDuplicatedName(this.user)) {
        this.$EventBus.$emit("modal-alert", "이미 등록된 이름입니다.");
      } else {
        this.startTyping();
      }
    },
    checkDuplicatedName(name) {
      return this.rank.some(user => user.user === name);
    }
  }
};
</script>

<style scoped lang="scss">
.inputBox {
  width: 300px;
  margin: 0 auto;
  input {
    width: calc(100% - 100px);
    text-align: center;
  }
}
.startContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.btnStart {
  color: #fff;
  vertical-align: middle;
}
</style>
