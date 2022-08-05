const search = document.querySelector('#searchInput')
const grabBuy = document.getElementById('BuyButton')
const resultName = document.getElementById('CurrencyResults')
const resultPrice = document.getElementById('PriceResults')
const resultRank = document.getElementById('RankResults')
const resultChange = document.getElementById('DayChangeResults')
const grabSell = document.getElementById('SellButton')
const grabHold = document.getElementById('HoldButton')
const grabWatch = document.getElementById('WatchButton')

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

    grabBuy.addEventListener('click', appendBuy)
    grabSell.addEventListener('click', appendSell)
    grabHold.addEventListener('click', appendHold)
    grabWatch.addEventListener('click', appendWatch)

    

    function appendBuy(){

        if (document.getElementById('buy1').innerText === ''){ 
            document.getElementById('buy1').appendChild(cardMain)}
    
        else if (document.getElementById('buy2').innerText === '') { 
                document.getElementById('buy2').appendChild(cardMain)}
                
                else if (document.getElementById('buy3').innerText === '') { 
                    document.getElementById('buy3').appendChild(cardMain)}
                   
                    else { 
                        document.getElementById('buy4').appendChild(cardMain)}

    }

    function appendSell(){
        
        if (document.getElementById('sell1').innerText === ''){ 
            document.getElementById('sell1').appendChild(cardMain)}
    
        else if (document.getElementById('sell2').innerText === '') { 
                document.getElementById('sell2').appendChild(cardMain)}
                
                else if (document.getElementById('sell3').innerText === '') { 
                    document.getElementById('sell3').appendChild(cardMain)}
                   
                    else { 
                        document.getElementById('sell4').appendChild(cardMain)}

    }

    function appendHold(){

        if (document.getElementById('hold1').innerText === ''){ 
            document.getElementById('hold1').appendChild(cardMain)}
    
        else if (document.getElementById('hold2').innerText === '') { 
                document.getElementById('hold2').appendChild(cardMain)}
                
                else if (document.getElementById('hold3').innerText === '') { 
                    document.getElementById('hold3').appendChild(cardMain)}
                   
                    else { 
                        document.getElementById('hold4').appendChild(cardMain)}

    }

    function appendWatch(){
         
    
        if (document.getElementById('watch1').innerText === ''){ 
            document.getElementById('watch1').appendChild(cardMain)}
    
        else if (document.getElementById('watch2').innerText === '') { 
                document.getElementById('watch2').appendChild(cardMain)}
                
                else if (document.getElementById('watch3').innerText === '') { 
                    document.getElementById('watch3').appendChild(cardMain)}
                   

                    else if (document.getElementById('watch4').innerText === ''){ 
                        document.getElementById('watch4').appendChild(cardMain)}

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