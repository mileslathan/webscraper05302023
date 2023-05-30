const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const PORT = 8000

const app = express()
const url = 'https://www.discogs.com/sell/list?style=Deep+House&ships_from=United+States'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const prices = []
        $('.price', html).each(function() {
           const price =  $(this).text()
           prices.push({
            price
           })
        })
        console.log(prices)
    }).catch(err => console.log(err))

app.listen(PORT, ()=> console.log(`server running on port 8000 :)`))