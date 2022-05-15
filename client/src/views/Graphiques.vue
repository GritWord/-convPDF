<template>
  <div>
    <ul>
      <li class="info-currency">
        <p class="currency-name" style="color: #001184">Nom</p>
        <p class="currency-price" style="color: #001184">Prix</p>
        <p class="priceIncrease" style="color: #001184">Cours 24h</p>
      </li>
      <li
        class="info-currency"
        v-for="currency in currencies.slice(0, 11)"
        :key="currency.id"
      >
        <p class="currency-name">{{ currency.name }}</p>
        <p class="currency-price">{{ currency.price }}</p>
        <div v-if="curren