const search = document.querySelector('#search')
// search.addEventListener('keyup', submitSearch)
search.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){

        submitSearch(e)
    }
})
   

function submitSearch(e){
    e.preventDefault()
    let searchTerm = document.getElementById('search').value
//    let url = `https://api.kucoin.com/api/v1/market/stats?symbol=BTC-USDT`

// https://api2.binance.com/api/v3/ticker/24hr
// https://api.kucoin.com/api/v1/market/stats?symbol=${searchTerm}-USDT
// https://api.coinbase.com/v2/currencies
https://api2.binance.com/api/v3/ticker/24hr

fetch(`https://api.coincap.io/v2/assets/${searchTerm.toLowerCase()}`)
.then(response => response.json())
// .then(data => console.log(data))
.then(data => searchAppend(data))
.catch((err) => console.log(err))


function searchAppend(coin){

   let parsedSearch = {

        'Currency': coin.data.name,
        'Price': coin.data.priceUsd,
        'Rank': coin.data.rank,
        'DayChange': coin.data.changePercent24Hr
    }

    console.log('This is data', coin)
    let resultName = document.getElementById('resultName')
    let resultPrice = document.getElementById('resultPrice')
    let resultRank = document.getElementById('resultRank')
    let resultChange = document.getElementById('resultChange')
    resultName.innerText = parsedSearch.Currency
    resultPrice.innerText = `Price $${Math.floor(parsedSearch.Price)}`
    resultChange.innerText = `Day Change 📈 ${Math.floor(parsedSearch.DayChange)}%`
    resultRank.innerText = `Rank #${parsedSearch.Rank}`
}


// function render(data){

//     console.log(data)
}

