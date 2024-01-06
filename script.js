const press = ()=>{
    var randomX = Math.floor(Math.random()*6)+1
    var image = document.querySelector("#imageId")
    var headingEle = document.getElementById("declaration") 
    switch(randomX){
        case 1 : image.setAttribute("src","diceroll/diceImages/1.svg")
                 headingEle.innerHTML = "koi nhi sbka smay aata hai"   
                 break
        case 2 : image.setAttribute("src","diceroll/diceImages/2.svg")
                 headingEle.innerHTML = "o hoo"   
                 break          
        case 3 : image.setAttribute("src","diceroll/diceImages/3.svg")
                 headingEle.innerHTML = " itna chalta hai yaar"   
                 break
        case 4 : image.setAttribute("src","diceroll/diceImages/4.svg")
                 headingEle.innerHTML = "thik hi hai"   
                 break                 
        case 5 : image.setAttribute("src","diceroll/diceImages/5.svg")
                 headingEle.innerHTML = "o triii thoda sa reh gya yaar!!!"   
                 break
        case 6 : image.setAttribute("src","diceroll/diceImages/6.svg")
                 headingEle.innerHTML = "kataii swad aa gya!!!"   
                 break
        default: headingEle.innerHTML = "Something wrong happened"            
    }
}