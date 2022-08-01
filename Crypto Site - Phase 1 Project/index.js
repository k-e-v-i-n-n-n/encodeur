const search = document.querySelector('#searchInput')
search.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        submitSearch(e)
    }
})
   
function submitSearch(e){
    // e.preventDefault()
    let searchTerm = document.getElementById('searchInput').value
fetch(`https://api.coincap.io/v2/assets/${searchTerm.toLowerCase()}`)
.then(response => response.json())
.then(data => searchAppend(data))
.catch((err) => console.log(err))




function searchAppend(coin){

let searchRes = [coin.data.name, coin.data.priceUsd, coin.data.rank, coin.data.changePercent24Hr]
let searchResNum = searchRes.slice(1)
let searchResStr = searchRes.slice(0,1)
let parsedSearch = searchResNum.map(function(value){
    return Number(value).toFixed(2);
})

    let resultName = document.getElementById('CurrencyResults')
    let resultPrice = document.getElementById('PriceResults')
    let resultRank = document.getElementById('RankResults')
    let resultChange = document.getElementById('DayChangeResults')
    resultName.innerText = searchResStr[0]
    resultPrice.innerText = `Price $${parsedSearch[0]}`
    resultRank.innerText = `Rank #${Math.floor(parsedSearch[1])}`
    resultChange.innerText = `Day Change 📈 ${parsedSearch[2]}%`

    let grabBuy = document.getElementById('BuyButton')
    grabBuy.addEventListener('click', appendBuy)


// // function appendBuy(){

// //     let buyCards = [document.getElementById('buy1'), document.getElementById('buy2'), document.getElementById('buy3'), document.getElementById('buy4')]

// let buyInner = '<span id="CurrencyCard">`${}`</span> \
// <span id="PriceCard">`Price $${}`</span> \
// <span id="RankCard">`Rank #${}`</span> \
// <span id="DayChangeCard">`Day Change ${}`</span>'






function appendBuy(){

let cardsArray1 = [document.querySelectorAll('.buy1',), document.getElementById('.buy1', '#PriceCard'), document.getElementById('.buy1', '#RankCard'), document.getElementById('.buy1', '#DayChangeCard')]
// let cardsArray2 = [document.getElementById('Currency_b'), document.getElementById('Price_cy'), document.getElementById('Rank_df'), document.getElementById('Day_Change_ch')]
// let cardsArray3 = [document.getElementById('Currency_ca'), document.getElementById('Price_cy'), document.getElementById('Rank_df'), document.getElementById('Day_Change_ci')]
// let cardsArray4 = [document.getElementById('Currency_cb'), document.getElementById('Price_cy'), document.getElementById('Rank_df'), document.getElementById('Day_Change_cj')]
console.log(cardsArray1)

    if(cardsArray1[0].innerText === 0){

    cardsArray1[0].innerText = searchResStr[0]
    cardsArray1[1].innerText = `Price $${(parsedSearch[0])}`
    cardsArray1[2].innerText = `Rank #${parsedSearch[1]}`
    cardsArray1[3].innerText = `Day Change 📈 ${(parsedSearch[2])}%`
}
//     else if (cardsArray2[0].innerText === ''){
//         cardsArray2[0].innerText = parsedSearch.Currency
//         cardsArray2[1].innerText = `Price $${Math.floor(parsedSearch.Price)}`
//         cardsArray2[2].innerText = `Rank #${parsedSearch.Rank}`
//         cardsArray2[3].innerText = `Day Change 📈 ${Math.floor(parsedSearch.DayChange)}%`

// }

// else if (cardsArray3[0].innerText === ''){
//     cardsArray3[0].innerText = parsedSearch.Currency
//     cardsArray3[1].innerText = `Price $${Math.floor(parsedSearch.Price)}`
//     cardsArray3[2].innerText = `Rank #${parsedSearch.Rank}`
//     cardsArray3[3].innerText = `Day Change 📈 ${Math.floor(parsedSearch.DayChange)}%`
// }

// else if (cardsArray4[0].innerText === ''){
//     cardsArray4[0].innerText = parsedSearch.Currency
//     cardsArray4[1].innerText = `Price $${Math.floor(parsedSearch.Price)}`
//     cardsArray4[2].innerText = `Rank #${parsedSearch.Rank}`
//     cardsArray4[3].innerText = `Day Change 📈 ${Math.floor(parsedSearch.DayChange)}%`
}
}
}
