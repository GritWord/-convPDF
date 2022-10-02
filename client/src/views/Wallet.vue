
<template>
  <body>
    <button v-on:click="deconnect" >🏃💨 Deconnexion</button>
    <div class="container">
      <div class="card">
        <h3 class="title">
          Valeur totale<br />
          <br /><br /><br />{{ sommeTotale }} $
        </h3>
        <div class="bar">