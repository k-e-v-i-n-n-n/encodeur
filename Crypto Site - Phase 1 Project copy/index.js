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
let resStrArray = []
let parsedSearchArray = []
search.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        submitSearch(e)
    }
})
function submitSearch(e){
        console.log('This is e.target.value', e.target.value)
        e.preventDefault()
    let searchTerm = e.target.value
    debugger
fetch(`https://api.coincap.io/v2/assets/${searchTerm.toLowerCase()}`)
.then(response => response.json())
.then(coin => searchAppend(coin))
.catch((err) => console.log(err))
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
    function appendBuy(resStrArray, parsedSearchArray){
        console.log(resStrArray, parsedSearchArray)
        let cardInner = `<div class="removable">
        <div class="CurrencyCard" id="Currency1">${parsedSearchArray[0]}</div>
        <div class="PriceCard" id="Price1">Price $${resStrArray[0]}</div>
        <div class="RankCard" id="Rank1">Rank #${Math.floor(resStrArray[1])}</div>
        <div class="DayChangeCard" id="DayChange1">Day Change ${resStrArray[2]}%</div>
        <button id='deleteBtn'>x</button>
        </div>`;
    let cardMain = document.createElement('div');
    cardMain.innerHTML = cardInner;
        if (buy1.innerText === ''){
            buy1.appendChild(cardMain)}
        else if (buy2.innerText === '') {
                buy2.appendChild(cardMain)}
                else if (buy3.innerText === '') {
                    buy3.appendChild(cardMain)}
                    else if (buy4.innerText === '') {
                        buy4.appendChild(cardMain)}
    }
    function appendSell(parsedSearch, searchResStr){
        let cardInner = `<div class="removable">
        <div class="CurrencyCard" id="Currency1">${searchResStr[0]}</div>
        <div class="PriceCard" id="Price1">Price $${parsedSearch[0]}</div>
        <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch[1])}</div>
        <div class="DayChangeCard" id="DayChange1">Day Change ${parsedSearch[2]}%</div>
        <button id='deleteBtn'>x</button>
        </div>`;
    let cardMain = document.createElement('div');
    cardMain.innerHTML = cardInner;
        if (sell1.innerText === ''){
            sell1.appendChild(cardMain)}
        else if (sell2.innerText === '') {
            sell2.appendChild(cardMain)}
                else if (sell3.innerText === '') {
                    sell3.appendChild(cardMain)}
                    else if (sell4.innerText === '') {
                        sell4.appendChild(cardMain)}
    }
    function appendHold(parsedSearch, searchResStr){
        let cardInner = `<div class="removable">
        <div class="CurrencyCard" id="Currency1">${searchResStr[0]}</div>
        <div class="PriceCard" id="Price1">Price $${parsedSearch[0]}</div>
        <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch[1])}</div>
        <div class="DayChangeCard" id="DayChange1">Day Change ${parsedSearch[2]}%</div>
        <button id='deleteBtn'>x</button>
        </div>`;
    let cardMain = document.createElement('div');
    cardMain.innerHTML = cardInner;
        if (hold1.innerText === ''){
            document.getElementById('hold1').appendChild(cardMain)}
        else if (hold2.innerText === '') {
                hold2.appendChild(cardMain)}
                else if (hold3.innerText === '') {
                    hold3.appendChild(cardMain)}
                    else if (hold4.innerText === '') {
                        hold4.appendChild(cardMain)}
    }
    function appendWatch(parsedSearch, searchResStr){
        let cardInner = `<div class="removable">
        <div class="CurrencyCard" id="Currency1">${searchResStr[0]}</div>
        <div class="PriceCard" id="Price1">Price $${parsedSearch[0]}</div>
        <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch[1])}</div>
        <div class="DayChangeCard" id="DayChange1">Day Change ${parsedSearch[2]}%</div>
        <button id='deleteBtn'>x</button>
        </div>`;
    let cardMain = document.createElement('div');
    cardMain.innerHTML = cardInner;
        if (watch1.innerText === ''){
            watch1.appendChild(cardMain)}
        else if (watch2.innerText === '') {
                watch2.appendChild(cardMain)}
                else if (watch3.innerText === '') {
                    watch3.appendChild(cardMain)}
                    else if (watch4.innerText === ''){
                        watch4.appendChild(cardMain)}
    }
    grabBuy.addEventListener('click', () => appendBuy(parsedSearchArray, resStrArray))
    grabSell.addEventListener('click', () => appendSell(parsedSearchArray, resStrArray))
    grabHold.addEventListener('click', () => appendHold(parsedSearchArray, resStrArray))
    grabWatch.addEventListener('click', () => appendWatch(parsedSearchArray, resStrArray))



    // function buttonFunc(cardMain){
// }
//    let deleteBtn = document.querySelectorAll('#deleteBtn')
// for (let i = 0 ; i < deleteBtn.length; i++){
//     deleteBtn[i].addEventListener('click', deleteDiv(e, deleteBtn[i]))
// }
// function deleteDiv(e, deleteBtn){
//     console.log(e)
// // let child = document.getElementById('deleteBtn')
// // let parent = child.closest('.removable')
// parent = deleteBtn.closest('.removable')
// parent.remove();
// }