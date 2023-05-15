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

// Fonction réutilisable pour faire des appels à l'API CMC
function fetchCMC (path) {
    const apiKey = process.env.CMC_API_KEY

    return fetch(`${apiBaseUrl}${path}`, {
        method: "GET",
        headers: {
            accept: 'application/json',
            'x-cmc_pro_api_key': apiKey
        }
    })
    .then(fetchResponse => {
        return fetchResponse.json();
    })
    .then(responseData => {
        const errorCode = responseData.status.error_code
        if (errorCode != 0) {
            throw new Error(responseData.status.error_message)
        }
        return responseData.data
    })
}

router.get('/', function getRoot(req