const press = ()=>{
    var randomX = Math.floor(Math.random()*6)+1
    var image = document.querySelector("#imageId")
    var headingEle = document.getElementById("declaration") 
    switch(randomX){
        case 1 : image.setAttribute("src","images/1.png")
                 headingEle.innerHTML = "koi nhi sbka smay aata hai"   
                 break
        case 2 : image.setAttribute("src","images/2.png")
                 headingEle.innerHTML = "o hoo"   
                 break          
        case 3 : image.setAttribute("src","images/3.png")
                 headingEle.innerHTML = " itna chalta hai yaar"   
                 break
        case 4 : image.setAttribute("src","images/4.png")
                 headingEle.innerHTML = "thik hi hai"   
                 break                 
        case 5 : image.setAttribute("src","images/5.png")
                 headingEle.innerHTML = "o triii thoda sa reh gya yaar!!!"   
                 break
        case 6 : image.setAttribute("src","images/6.png")
                 headingEle.innerHTML = "kataii swad aa gya!!!"   
                 break
        default: headingEle.innerHTML = "Something wrong happened"            
    }
}
document.body.addEventListener("keypress",(event)=>{
    if(event.key === ' '){
        press()
    }
})