<template>
  <div>
    <header>
      <h1>로그인</h1>
    </header>
    <div class="login">
      <form @submit.prevent="onSubmit">
        <div>
          <label for="email">Email</label>
          <input
            v-model="email"
            class="form-control"
            type="text"
            name="email"
            autofocus
            placeholder="test@test.com"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            v-model="password"
            class="form-control"
            type="password"
            placeholder="123123"
          />
        </div>
        <button
          :class="{'btn-success': !invalidForm}"
          :disabled="invalidForm"
          class="btn"
          type="submit"
        >Log In</button>
      </form>
      <p
        v-if="error"
        class="error"
      >{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      rPath: ""
    };
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password;
    }
  },
  created() {
    this.rPath = this.$route.query.redirect || "/";
    console.log(this.rPath);
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
      this.login({ email: this.email, password: this.password })
        .then(() => {
          this.$router.push(this.rPath);
        })
        .catch(err => {
          this.error = err.data.error;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 400px;
  margin: 0 auto;
}
.error {
  color: #f00;
}
</style>