<template>
<div>
  <div class="login-box">
    <h2>Choisissez vos identifiants :</h2>
    <form @submit.prevent="registerCredentials">
      <div class="user-box">
        <input
          type="text"
          name=""
          required=""
          id="regusername"
          v-model="regusername"
          autocomplete="off"
        />
        <label for="regusername">Username</label>
      </div>
      <div class="user-box">
        <input
          name=""
          id="regpassword"
          v-model="regpassword"
          type="password"
          required=""
          autocomplete="off"
        />
        <label>Password</label>
      </div>
      <button type="submit" class="subbutton">S'enregistrer</button>
    </form>
  </div>
  <router-link to="/porte_monnaie" class='text-under'>Retour</router-link>
</div>
</template>

<script>
export default {
  name: 'signin',
  data 