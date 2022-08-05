const search = document.querySelector('#searchInput')
const grabBuy = document.getElementById('BuyButton')
const resultName = document.getElementById('CurrencyResults')
const resultPrice = document.getElementById('PriceResults')
const resultRank = document.getElementById('RankResults')
const resultChange = document.getElementById('DayChangeResults')

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

function searchAppend(coin){

    let searchRes = [coin.data.name, coin.data.priceUsd, coin.data.rank, coin.data.changePercent24Hr]
    let searchResNum = searchRes.slice(1)
    let searchResStr = searchRes.slice(0,1)
    let parsedSearch = searchResNum.map(function(value){
        return Number(value).toFixed(2); })

    let cardInner = `<div class="removable">
        <div class="CurrencyCard" id="Currency1">${searchResStr[0]}</div>
        <div class="PriceCard" id="Price1">Price $${parsedSearch[0]}</div>
        <div class="RankCard" id="Rank1">Rank #${Math.floor(parsedSearch[1])}</div>
        <div class="DayChangeCard" id="DayChange1">Day Change 📈 ${parsedSearch[2]}%</div>
        <button id='deleteBtn'>x</button>
        </div>`;

  
    resultName.innerText = searchResStr[0]
    resultPrice.innerText = `Price $${parsedSearch[0]}`
    resultRank.innerText = `Rank #${Math.floor(parsedSearch[1])}`
    resultChange.innerText = `Day Change 📈 ${parsedSearch[2]}%`

    let cardMain = document.createElement('div');
    cardMain.innerHTML += cardInner
    // let cardClone = [cardCloneBuy = cardMain.cloneNode(true), cardCloneSell = cardMain.cloneNode(true), cardCloneHold = cardMain.cloneNode(true), cardCloneWatch = cardMain.cloneNode(true)]


    // let grabBuy = document.getElementById('BuyButton')
    grabBuy.addEventListener('click', appendBuy)
    let grabSell = document.getElementById('SellButton')
    grabSell.addEventListener('click', function() {appendSell(cardCloneSell)})
    let grabHold = document.getElementById('HoldButton')
    grabHold.addEventListener('click', function() {appendHold(cardCloneHold)})
    let grabWatch = document.getElementById('WatchButton')
    grabWatch.addEventListener('click', function() {appendWatch(cardCloneWatch)})

    

    function appendBuy(cardMain){

        if (document.getElementById('buy1').innerText === ''){ 
            document.getElementById('buy1').appendChild(cardMain)}
    
        else if (document.getElementById('buy2').innerText === '') { 
                document.getElementById('buy2').appendChild(cardCloneBuy)}
                
                else if (document.getElementById('buy3').innerText === '') { 
                    document.getElementById('buy3').appendChild(cardCloneBuy)}
                   
                    else { 
                        document.getElementById('buy4').appendChild(cardCloneBuy)}

    }

    function appendSell(cardMain){
        
        if (document.getElementById('sell1').innerText === ''){ 
            document.getElementById('sell1').appendChild(cardCloneSell)}
    
        else if (document.getElementById('sell2').innerText === '') { 
                document.getElementById('sell2').appendChild(cardCloneSell)}
                
                else if (document.getElementById('sell3').innerText === '') { 
                    document.getElementById('sell3').appendChild(cardCloneSell)}
                   
                    else { 
                        document.getElementById('sell4').appendChild(cardCloneSell)}

    }

    function appendHold(cardCloneHold){

        if (document.getElementById('hold1').innerText === ''){ 
            document.getElementById('hold1').appendChild(cardCloneHold)}
    
        else if (document.getElementById('hold2').innerText === '') { 
                document.getElementById('hold2').appendChild(cardCloneHold)}
                
                else if (document.getElementById('hold3').innerText === '') { 
                    document.getElementById('hold3').appendChild(cardCloneHold)}
                   
                    else { 
                        document.getElementById('hold4').appendChild(cardCloneHold)}

    }

    function appendWatch(cardCloneWatch){
         
    
        if (document.getElementById('watch1').innerText === ''){ 
            document.getElementById('watch1').appendChild(cardCloneWatch)}
    
        else if (document.getElementById('watch2').innerText === '') { 
                document.getElementById('watch2').appendChild(cardCloneWatch)}
                
                else if (document.getElementById('watch3').innerText === '') { 
                    document.getElementById('watch3').appendChild(cardCloneWatch)}
                   
                    // if (document.getElementById('watch4').innerText === '')

                    else { 
                        document.getElementById('watch4').appendChild(cardCloneWatch)}

    }





}


   
   }

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