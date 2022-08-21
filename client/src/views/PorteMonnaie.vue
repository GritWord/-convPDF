<template>
<div>
  <div class="login-box">
    <h2>Login</h2>
    <form @submit.prevent="sendCredentials">
      <div class="user-box">
        <input
          type="text"
          name=""
          required=""
          id="username"
          v-model="username"
          autocomplete="off"
        />
        <label for="username">Username</label>
      </div>
      <div class="user-box">
        <input
          name=""
          id="paswword"
          v-model="password"
          type="password"
          required=""
          autocomplete="off"
        />
        <label>Password</label>
      </div>
      <button type="submit" class="subbutton">Se connecter</button>
    </form>
  </div>
  <router-link to="/signin" class='text-under'>S'enregistrer</router-link>
</div>
</template>

<script>
export default {
  name: 'porte_monnaie',
  data () {
    return {
      username: undefined,
      password: undefined
    }
  },
  methods: {
    sendCredentials () {
      const login = this.username
      const password = this.password
      this.$store.dispatch('login', { login, password })
        .then(result => {
          if (result === true) {
            this.$router.push({
              name: 'wallet',
              query: { redirect: '/wallet' }
            })
          } else {
            window.alert('Invalid credentials !')
          }
        })
    }
  }
}
</script>

<style>
.text-under {
  position: absolute;
  top: 78%;
  left: 47%;
}

.login-box {
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid