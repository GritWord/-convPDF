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
        <router-link class="main-tab" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="main-tab" :to="{ name: 'comprendre' }"
          >Comprendre</router-link
        >
        <router-link class="main-tab" :to="{ name: 'graphiques' }"
          >Graphiques</router-link
        >
        <router-link class="main-tab" :to="{ name: 'wallet' }"
          >Wallet</router-link
        >
        <router-link class="main-tab" :to="{ name: 'a_propos' }"
          >A propos</router-link
        >
      </div>
    </div>
    <div class="burger-nav" id="burgernav">
      <router-link tag="li" class="burger-tab" :to="{ name: 'Home' }"
        >Home</router-link
      >
      <router-link tag="li" class="burger-tab" :to="{ name: 'comprendre' }"
        >Comprendre</router-link
      >
      <router-link tag="li" class="burger-tab" :to="{ name: 'graphiques' }"
 