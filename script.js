let Pontos = 0
let Qtd = 0
let PontosText = document.getElementById("PontosText")
PontosText.innerText="0"
let spawner = document.getElementById("spawner")
let colector = document.getElementById("colector")
let input = document.getElementById("input")
let button = document.getElementById("button")
function verificarColisao(mx,my,cX,cY,coinW,colectorH){
let vY = Math.abs(my - (cY + 5))
let vX = Math.abs(mx - (cX +5))
let hitbox = Math.abs(parseInt(colectorH)/2 + parseInt(coinW)/2)
return vY <= hitbox && vX <= hitbox
}    
let colectorSize = 40
const moedaSize = 10
document.addEventListener('mousemove',(e)=>{

    Xrelativo = e.clientX - spawner.getBoundingClientRect().left
    Yrelativo = e.clientY - spawner.getBoundingClientRect().top    
    let dentroDaArea = Xrelativo >= 0 && Xrelativo <= 300 && Yrelativo >= 0 && Yrelativo <= 300
    let coins = document.querySelectorAll(".coin")
    coins.forEach(coin => {
    if (verificarColisao(Xrelativo,Yrelativo,parseInt(coin.style.left),parseInt(coin.style.top),moedaSize,colectorSize)){
        coin.remove()
        Pontos++
        PontosText.innerText = Pontos
        Qtd--
        
    }

});


    colector.style.cssText = `
        position: absolute;
        width: ${colectorSize}px;
        height: ${colectorSize}px;
        border-radius: 50%;
        background-color: gray;
        top:${Yrelativo- parseInt(colector.style.height)/2}px;
        left:${Xrelativo - parseInt(colector.style.width)/2}px;
        visibility: ${dentroDaArea ? 'visible' : 'hidden'};` 
}) 
let intervalo = setInterval(() => {
    if(Qtd < 10){
        spawnar()
    }
}, 500);

function RandomXY(){
    let x = Math.floor(Math.random() * (300 + 1))
    let y = Math.floor(Math.random() * (300 + 1))
    return {x:x, y:y}
}

function spawnar(){
    let rX= RandomXY().x
    let rY = RandomXY().y
    let coin = document.createElement("div")
    coin.classList="coin "
    coin.style.cssText += `top: ${rY}px; left:${rX}px;`
    spawner.appendChild(coin)
    Qtd++
}

button.addEventListener('mousedown',()=>{
    colectorSize = input.value
})
let loja = document.getElementById("loja")
function lojaOnOff(){
    loja.classList.toggle("hideLoja")

}
document.getElementById('shop').addEventListener('click',  lojaOnOff);
document.getElementById('botaoFecharloja').addEventListener('click',  lojaOnOff);