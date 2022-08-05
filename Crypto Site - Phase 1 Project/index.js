const search = document.querySelector('#searchInput')
search.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        submitSearch(e)
    }
})
   
function submitSearch(e){
    e.preventDefault()
    // let searchTerm = document.getElementById('searchInput').value
    let searchTerm = e.target.value
    
fetch(`https://api.coincap.io/v2/assets/${searchTerm.toLowerCase()}`)
.then(response => response.json())
.then(coin => searchAppend(coin))
// .then(coin => organizeAppend(coin))
.catch((err) => console.log(err))

    

// console.log('This is parsed:', parsedSearch)

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
    let grabSell = document.getElementById('SellButton')
    grabSell.addEventListener('click', appendSell)

    function appendBuy(){
    

        let cardsArray1 = [document.getElementById('Currency1'), document.getElementById('Price1'), document.getElementById('Rank1'), document.getElementById('DayChange1')]
        let cardsArray2 = [document.getElementById('Currency1.1'), document.getElementById('Price1.1'), document.getElementById('Rank1.1'), document.getElementById('DayChange1.1')]
        let cardsArray3 = [document.getElementById('Currency1.2'), document.getElementById('Price1.2'), document.getElementById('Rank1.2'), document.getElementById('DayChange1.2')]
           
        // console.log(cardsArray1[0].innerText)
        
        if(cardsArray1[0].childNodes.length === 0){
        
            cardsArray1[0].innerText = searchResStr[0]
            cardsArray1[1].innerText = `Price $${parsedSearch[0]}`
            cardsArray1[2].innerText = `Rank #${parsedSearch[1]}`
            cardsArray1[3].innerText = `Day Change 📈 ${parsedSearch[2]}%`
        }
        
            else if (cardsArray2[0].childNodes.length === 0){
                cardsArray2[0].innerText = searchResStr[0]
                cardsArray2[1].innerText = `Price $${parsedSearch[0]}`
                cardsArray2[2].innerText = `Rank #${parsedSearch[1]}`
                cardsArray2[3].innerText = `Day Change 📈 ${parsedSearch[2]}%`
        
        }
        
        else if (cardsArray3[0].childNodes.length === 0){
            cardsArray3[0].innerText = searchResStr[0]
            cardsArray3[1].innerText = `Price $${parsedSearch[0]}`
            cardsArray3[2].innerText = `Rank #${parsedSearch[1]}`
            cardsArray3[3].innerText = `Day Change 📈 ${parsedSearch[2]}%`
        }
        }
        
        // function appendSell(){
            
        
        //     let cardsArray1 = [document.getElementById('Currency2'), document.getElementById('Price2'), document.getElementById('Rank2'), document.getElementById('DayChange2')]
        //     let cardsArray2 = [document.getElementById('Currency2.1'), document.getElementById('Price2.1'), document.getElementById('Rank2.1'), document.getElementById('DayChange2.1')]
        //     let cardsArray3 = [document.getElementById('Currency2.2'), document.getElementById('Price2.2'), document.getElementById('Rank2.2'), document.getElementById('DayChange2.2')]
               
        //     console.log('Price 2.1:', document.getElementById('Price2.1').innerText)
        //     console.log('This is e value:', e.target.value)
        //     console.log('This is results:', document.getElementById('CurrencyResults'))
            
        //     if(document.getElementById('Price2').innerText === ''){
            
        //         cardsArray1[0].innerText = searchResStr[0]
        //         cardsArray1[1].innerText = `Price $${parsedSearch[0]}`
        //         cardsArray1[2].innerText = `Rank #${parsedSearch[1]}`
        //         cardsArray1[3].innerText = `Day Change 📈 ${parsedSearch[2]}%`
        //     }
            
        //     else if (document.getElementById('Price2.1').innerText === ''){
        //             cardsArray2[0].innerText = searchResStr[0]
        //             cardsArray2[1].innerText = `Price $${parsedSearch[0]}`
        //             cardsArray2[2].innerText = `Rank #${parsedSearch[1]}`
        //             cardsArray2[3].innerText = `Day Change 📈 ${parsedSearch[2]}%`
            
        //     }
            
        //     else if (document.getElementById('Price2.2').innerText === ''){
        //         cardsArray3[0].innerText = searchResStr[0]
        //         cardsArray3[1].innerText = `Price $${parsedSearch[0]}`
        //         cardsArray3[2].innerText = `Rank #${parsedSearch[1]}`
        //         cardsArray3[3].innerText = `Day Change 📈 ${parsedSearch[2]}%`
        //     }
        // }

        function appendSell(){
            
        
   
        // document.getElementById('Currency2.1'), document.getElementById('Price2.1'), document.getElementById('Rank2.1'), document.getElementById('DayChange2.1')
        //  [document.getElementById('Currency2.2'), document.getElementById('Price2.2'), document.getElementById('Rank2.2'), document.getElementById('DayChange2.2')]
               

        if(document.getElementById('Price2').innerText === ''){
            appendSell1()}

            else if (document.getElementById('Price2.1').innerText === ''){  appendSell2()
            }

            console.log('Price 2.1:', document.getElementById('Price2.1').innerText)
            console.log('This is e value:', e.target.value)
            console.log('This is results:', document.getElementById('CurrencyResults'))
            
            function appendSell1(){
            
                document.getElementById('Currency2').innerText = searchResStr[0]
                document.getElementById('Price2').innerText = `Price $${parsedSearch[0]}`
                document.getElementById('Rank2').innerText = `Rank #${parsedSearch[1]}`
                document.getElementById('DayChange2').innerText = `Day Change 📈 ${parsedSearch[2]}%`
            }
        //     }
            
            
              
               function appendSell2() {
                document.getElementById('Currency2.1').innerText = searchResStr[0]
                document.getElementById('Price2.1').innerText = `Price $${parsedSearch[0]}`
                document.getElementById('Rank2.1').innerText = `Rank #${parsedSearch[1]}`
                document.getElementById('DayChange2.1').innerText = `Day Change 📈 ${parsedSearch[2]}%`
            
            }
            
        //     else if (document.getElementById('Price2.2').innerText === ''){
        //         document.getElementById('Currency2.2').innerText = searchResStr[0]
        //         document.getElementById('Price2.2').innerText = `Price $${parsedSearch[0]}`
        //         document.getElementById('Rank2.2').innerText = `Rank #${parsedSearch[1]}`
        //         document.getElementById('DayChange2.2').innerText = `Day Change 📈 ${parsedSearch[2]}%`
        // }



}

    


}
}
