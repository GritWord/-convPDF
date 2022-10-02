
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
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
      </div>
      <div class="card">
        <h3 class="title">
          Monnaie disponible<br />
          <br /><br />{{ holdingDolls }} $
        </h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Cryptos disponibles</h3>
        <ul class="cryptodispo">
          <li v-for="hold in holdingsNotNull" :key="hold.id">
            <p>{{ hold.name }} {{ hold.somme }}</p>
          </li>
        </ul>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="30" cy="30" r="20" />
          </svg>
        </div>
      </div>
    </div>
    <div class="wallet-block2">
      <div class="wallet-AchatRevente">
        <h2 style="color: #bdbdbd">Trading :</h2>
        <ul>
          <form @submit.prevent="acheter" class="form-achat">
            <div class="box">
              <select v-model="cryptoSelected">
                <option
                  v-for="(currency, idx) in tradeCurrencies"
                  v-bind:key="currency.id + idx"
                  :value="currency.name"
                >
                  {{ currency.name }}
                </option>
              </select>
            </div>
            <p class="text-achat">
              <label for="achat" style="color: #bdbdbd">
                pour un montant de $
              </label>
              <input
                id="achat"
                v-model.number="achat"
                type="number"
                class="app-form-control"
              />
            </p>
            <button type="submit" class="button-achat">Acheter</button>
          </form>
          <form @submit.prevent="vendre">
            <div class="box">
              <select v-model="cryptoSelected">
                <option
                  v-for="currency in holdingsNotNull"
                  v-bind:key="currency.id"
                >
                  {{ currency.name }}
                </option>
              </select>
            </div>
            <p>
              <label for="vente" style="color: #bdbdbd">
                pour un montant de $
              </label>
              <input
                id="vente"
                v-model.number="vente"
                type="number"
                class="app-form-control"
              />
            </p>
            <button type="submit" class="button-vendre">Vendre</button>
          </form>
        </ul>
      </div>
    </div>
  </body>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Wallet',

  data () {
    return {
      achat: 0,
      vente: 0,
      login: '',
      cryptoSelected: '',
      holdings: [],
      holdingDolls: 0
    }
  },

  computed: mapState(['tradeCurrencies', 'sommeTotale', 'holdingsNotNull']),

  mounted () {
    this.login = this.$store.state.user

    this.$store.dispatch('cryptoTrade', this.login)