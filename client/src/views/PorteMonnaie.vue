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
  <router-link