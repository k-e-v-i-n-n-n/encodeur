const search = document.querySelector('#search')

const resultName = document.getElementById('resultName')
const resultPrice = document.getElementById('resultPrice')
const resultRank = document.getElementById('resultRank')
const resultChange = document.getElementById('resultChange')

// const resultName = document.getElementById('CurrencyResults')
// const resultPrice = document.getElementById('PriceResults')
// const resultRank = document.getElementById('RankResults')
// const resultChange = document.getElementById('DayChangeResults')
const grabBuy = document.getElementById('BuyButton')
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
.catch((err) => console.log(err))

}

function searchAppend(coin){

   let parsedSearch = {

        'Currency': coin.data.name,
        'Price': coin.data.priceUsd,
        'Rank': coin.data.rank,
        'DayChange': coin.data.changePercent24Hr
    }

    console.log('This is data', coin)
    
    resultName.innerText = parsedSearch.Currency
    resultPrice.innerText = `Price $${Math.floor(parsedSearch.Price)}`
    resultChange.innerText = `Day Change 📈 ${Math.floor(parsedSearch.DayChange)}%`
    resultRank.innerText = `Rank #${parsedSearch.Rank}`

grabBuy.addEventListener('click', () => appendBuy(parsedSearch))
grabSell.addEventListener('click', () => appendSell(parsedSearch))
grabHold.addEventListener('click', () => appendHold(parsedSearch))
grabWatch.addEventListener('click', () => appendWatch(parsedSearch))

}




function appendBuy(parsedSearch){


    let cardInner = `<div class="removable">
    <div class="CurrencyCard" id="Currency1">${parsedSearch.Currency}</div>
    <div class="PriceCard" id="Price1">Price $${parsedSearch.Price}</div>
    <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch.Rank)}</div>
    <div class="DayChangeCard" id="DayChange1">Day Change 📈 ${parsedSearch.DayChange}%</div>
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
               
                else { 
                    buy4.appendChild(cardMain)}

}

function appendSell(parsedSearch){

    let cardInner = `<div class="removable">
    <div class="CurrencyCard" id="Currency1">${parsedSearch.Currency}</div>
    <div class="PriceCard" id="Price1">Price $${parsedSearch.Price}</div>
    <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch.Rank)}</div>
    <div class="DayChangeCard" id="DayChange1">Day Change 📈 ${parsedSearch.DayChange}%</div>
    <button id='deleteBtn'>x</button>
    </div>`;

let cardMain = document.createElement('div');
cardMain.innerHTML = cardInner;
    
    if (sell1.innerText === ''){ 
        sell1.appendChild(cardMain)}

    else if (sell2.innerText === '') { 
        sell2.appendChild(cardMain)}
            
            else if (sell2.innerText === '') { 
                sell2.appendChild(cardMain)}
               
                else { 
                    sell4.appendChild(cardMain)}

}

function appendHold(parsedSearch){


    let cardInner = `<div class="removable">
    <div class="CurrencyCard" id="Currency1">${parsedSearch.Currency}</div>
    <div class="PriceCard" id="Price1">Price $${parsedSearch.Price}</div>
    <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch.Rank)}</div>
    <div class="DayChangeCard" id="DayChange1">Day Change 📈 ${parsedSearch.DayChange}%</div>
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
               
                else { 
                    hold4.appendChild(cardMain)}

}

function appendWatch(parsedSearch){

    let cardInner = `<div class="removable">
    <div class="CurrencyCard" id="Currency1">${parsedSearch.Currency}</div>
    <div class="PriceCard" id="Price1">Price $${parsedSearch.Price}</div>
    <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch.Rank)}</div>
    <div class="DayChangeCard" id="DayChange1">Day Change 📈 ${parsedSearch.DayChange}%</div>
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



