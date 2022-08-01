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

    let resultName = document.getElementById('Currency_by')
    let resultPrice = document.getElementById('Price')
    let resultRank = document.getElementById('Rank')
    let resultChange = document.getElementById('Day_Change')
    resultName.innerText = searchResStr[0]
    resultPrice.innerText = `Price $${parsedSearch[0]}`
    resultRank.innerText = `Rank #${Math.floor(parsedSearch[1])}`
    resultChange.innerText = `Day Change 📈 ${parsedSearch[2]}%`

    let grabBuy = document.getElementById('Rectangle_4')
    grabBuy.addEventListener('click', appendBuy)



function appendBuy(){

let cardsArray1 = [document.getElementById('Currency_bz'), document.getElementById('Price_cx'), document.getElementById('Rank_de'), document.getElementById('Day_Change_cg')]
let cardsArray2 = [document.getElementById('Currency_b'), document.getElementById('Price_cy'), document.getElementById('Rank_df'), document.getElementById('Day_Change_ch')]
let cardsArray3 = [document.getElementById('Currency_ca'), document.getElementById('Price_cy'), document.getElementById('Rank_df'), document.getElementById('Day_Change_ci')]
let cardsArray4 = [document.getElementById('Currency_cb'), document.getElementById('Price_cy'), document.getElementById('Rank_df'), document.getElementById('Day_Change_cj')]

    if(cardsArray1[0].innerText === ''){

    let arrayRound = parsedSearchArr.map(value => Math.floor(value))
    cardsArray1[0].innerText = arrayRound.Currency
    cardsArray1[1].innerText = `Price $${(arrayRound.Price)}`
    cardsArray1[2].innerText = `Rank #${arrayRound.Rank}`
    cardsArray1[3].innerText = `Day Change 📈 ${(arrayRound.DayChange)}%`
}
    else if (cardsArray2[0].innerText === ''){
        cardsArray2[0].innerText = parsedSearch.Currency
        cardsArray2[1].innerText = `Price $${Math.floor(parsedSearch.Price)}`
        cardsArray2[2].innerText = `Rank #${parsedSearch.Rank}`
        cardsArray2[3].innerText = `Day Change 📈 ${Math.floor(parsedSearch.DayChange)}%`

}

else if (cardsArray3[0].innerText === ''){
    cardsArray3[0].innerText = parsedSearch.Currency
    cardsArray3[1].innerText = `Price $${Math.floor(parsedSearch.Price)}`
    cardsArray3[2].innerText = `Rank #${parsedSearch.Rank}`
    cardsArray3[3].innerText = `Day Change 📈 ${Math.floor(parsedSearch.DayChange)}%`
}

else if (cardsArray4[0].innerText === ''){
    cardsArray4[0].innerText = parsedSearch.Currency
    cardsArray4[1].innerText = `Price $${Math.floor(parsedSearch.Price)}`
    cardsArray4[2].innerText = `Rank #${parsedSearch.Rank}`
    cardsArray4[3].innerText = `Day Change 📈 ${Math.floor(parsedSearch.DayChange)}%`
}
}
}
}