const express = require('express')

const verifyToken = require('../middlewares/verify-token')
const { getUserByLogin } = require('../models/user-queries.js')

const router = new express.Router()

const apiBaseUrl = 'https://pro-api.coinmarketcap.com/v1'

const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

// Fonction réutilisable pour faire 