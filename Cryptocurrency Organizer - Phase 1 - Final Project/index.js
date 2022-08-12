const search = document.querySelector('#searchInput')
const grabBuy = document.getElementById('BuyButton')
const resultName = document.getElementById('CurrencyResults')
const resultPrice = document.getElementById('PriceResults')
const resultRank = document.getElementById('RankResults')
const resultChange = document.getElementById('DayChangeResults')
const grabSell = document.getElementById('SellButton')
const grabHold = document.getElementById('HoldButton')
const grabWatch = document.getElementById('WatchButton')
const buy1 = document.getElementById('buy1')
const buy2 = document.getElementById('buy2')
const buy3 = document.getElementById('buy3')
const buy4 = document.getElementById('buy4')
const sell1 = document.getElementById('sell1')
const sell2 = document.getElementById('sell2')
const sell3 = document.getElementById('sell3')
const sell4 = document.getElementById('sell4')
const hold1 = document.getElementById('hold1')
const hold2 = document.getElementById('hold2')
const hold3 = document.getElementById('hold3')
const hold4 = document.getElementById('hold4')
const watch1 = document.getElementById('watch1')
const watch2 = document.getElementById('watch2')
const watch3 = document.getElementById('watch3')
const watch4 = document.getElementById('watch4')
const buttons = document.getElementsByClassName('deleteBtn')
let resStrArray = []
let parsedSearchArray = []


grabBuy.addEventListener('click', () => appendBuy(parsedSearchArray, resStrArray))
grabSell.addEventListener('click', () => appendSell(parsedSearchArray, resStrArray))
grabHold.addEventListener('click', () => appendHold(parsedSearchArray, resStrArray))
grabWatch.addEventListener('click', () => appendWatch(parsedSearchArray, resStrArray))

search.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        submitSearch(e)
    }
})
function submitSearch(e){
        e.preventDefault()
    let searchTerm = e.target.value
fetch(`https://api.coincap.io/v2/assets/${searchTerm.toLowerCase()}`)
.then(response => response.json())
.then(coin => searchAppend(coin))
.catch((err) => alert('Coin not found...try again.'))
}


function searchAppend(coin){
    let searchRes = [coin.data.name, coin.data.priceUsd, coin.data.rank, coin.data.changePercent24Hr]
    let searchResNum = searchRes.slice(1)
    let searchResStr = searchRes.slice(0,1)
    let parsedSearch = searchResNum.map(function(value){
        return Number(value).toFixed(2); })
    resultName.innerText = searchResStr[0]
    resultPrice.innerText = `Price $${parsedSearch[0]}`
    resultRank.innerText = `Rank #${Math.floor(parsedSearch[1])}`
    resultChange.innerText = `Day Change ${parsedSearch[2]}%`
    resStrArray = [searchResStr[0]]
    parsedSearchArray = [parsedSearch[0], parsedSearch[1], parsedSearch[2]]
}

function cardPop(parsedSearch, searchResStr){

    let cardInner = `<div class="removable">
    <div class="CurrencyCard" id="Currency1">${searchResStr[0]}</div>
    <div class="PriceCard" id="Price1">Price $${parsedSearch[0]}</div>
    <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch[1])}</div>
    <div class="DayChangeCard" id="DayChange1">Day Change ${parsedSearch[2]}%</div>
    <button class='deleteBtn'>x</button>
    </div>`;

let cardMain = document.createElement('div');
cardMain.innerHTML = cardInner;


return cardMain

}
    function appendBuy(parsedSearch, searchResStr){
      
        if (buy1.innerText === '' && searchResStr[0] != undefined){
            buy1.appendChild(cardPop(parsedSearch, searchResStr))}
        else if (buy2.innerText === '' && searchResStr[0] != undefined) {
                buy2.appendChild(cardPop(parsedSearch, searchResStr))}
                else if (buy3.innerText === '' && searchResStr[0] != undefined) {
                    buy3.appendChild(cardPop(parsedSearch, searchResStr))}
                    else if (buy4.innerText === '' && searchResStr[0] != undefined) {
                        buy4.appendChild(cardPop(parsedSearch, searchResStr))}
                        

                        getDelete()
    }


    function appendSell(parsedSearch, searchResStr){
        
        if (sell1.innerText === '' && searchResStr[0] != undefined){
            sell1.appendChild(cardPop(parsedSearch, searchResStr))}
        else if (sell2.innerText === '' && searchResStr[0] != undefined) {
            sell2.appendChild(cardPop(parsedSearch, searchResStr))}
                else if (sell3.innerText === '' && searchResStr[0] != undefined) {
                    sell3.appendChild(cardPop(parsedSearch, searchResStr))}
                    else if (sell4.innerText === '' && searchResStr[0] != undefined) {
                        sell4.appendChild(cardPop(parsedSearch, searchResStr))}

                        getDelete()
    }
    function appendHold(parsedSearch, searchResStr){
    
        if (hold1.innerText === '' && searchResStr[0] != undefined){
            hold1.appendChild(cardPop(parsedSearch, searchResStr))}
        else if (hold2.innerText === '' && searchResStr[0] != undefined) {
                hold2.appendChild(cardPop(parsedSearch, searchResStr))}
                else if (hold3.innerText === '' && searchResStr[0] != undefined) {
                    hold3.appendChild(cardPop(parsedSearch, searchResStr))}
                    else if (hold4.innerText === '' && searchResStr[0] != undefined) {
                        hold4.appendChild(cardPop(parsedSearch, searchResStr))}

                        getDelete()
    }
    function appendWatch(parsedSearch, searchResStr){
     
        if (watch1.innerText === '' && searchResStr[0] != undefined){
            watch1.appendChild(cardPop(parsedSearch, searchResStr))}
        else if (watch2.innerText === '' && searchResStr[0] != undefined) {
                watch2.appendChild(cardPop(parsedSearch, searchResStr))}
                else if (watch3.innerText === '' && searchResStr[0] != undefined) {
                    watch3.appendChild(cardPop(parsedSearch, searchResStr))}
                    else if (watch4.innerText === '' && searchResStr[0] != undefined){
                        watch4.appendChild(cardPop(parsedSearch, searchResStr))}

                        getDelete()


    }

    function getDelete(){

        for (btn of buttons){
            btn.addEventListener('click', deleteDiv)
        }
    }

    function deleteDiv(e){
        e.target.parentNode.remove();
    }


 


  