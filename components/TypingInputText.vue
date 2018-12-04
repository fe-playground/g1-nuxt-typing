<template>
  <li class="textContainer">
    <div class="text">{{ text }}</div>
    <div
      :class="{ active: isActive}"
      class="inputBox shadow"
    >
      <input
        ref="input"
        :readonly="isSuccess || !isActive"
        v-model="input"
        type="text"
        placeholder="위 문장을 입력하세요"
        @keyup="typing"
      />
    </div>
  </li>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    isActive: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isComplete: false,
      input: ""
    };
  },
  computed: {
    ...mapState(["isSuccess"])
  },
  updated() {
    if (this.isActive) this.$refs.input.focus();
    if (this.isSuccess) this.input = "";
  },
  methods: {
    ...mapMutations(["complete"]),
    typing(event) {
      if (this.text === event.target.value) {
        this.isComplete = true;
        this.$store.commit("complete");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.textContainer {
  margin-bottom: 2rem;
  .text {
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
    padding: 0 0.5rem;
    font-weight: bold;
  }
  .inputBox {
    padding: 0 0.5rem;
    border: 1px solid white;
    &.active {
      border-color: sandybrown;
    }
    input {
      width: 100%;
    }
  }
}
</style>
