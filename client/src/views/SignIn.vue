<template>
<div>
  <div class="login-box">
    <h2>Choisissez vos identifiants :</h2>
    <form @submit.prevent="registerCredentials">
      <div class="user-box">
        <input
          type="text"
          name="