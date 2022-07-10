<template>
<div>
  <div class="login-box">
    <h2>Login</h2>
    <form @submit.prevent="sendCredentials">
      <div class="user-box">
        <input
       