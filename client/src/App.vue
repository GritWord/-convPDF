<template>
  <div>
    <div class="main-header">
      <header class="main-header-title">
        <h1>
          <router-link class="toplink" :to="{ name: 'Home' }"
            >CRYPTO FUN</router-link
          >
        </h1>
        <div class="burger"></div>
      </header>
      <div class="main-nav" id="mainnav">
        <router-link class="main-tab" :to="{ name: 'Home' }"