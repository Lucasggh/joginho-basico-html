let Pontos = 0
let Qtd = 0
const PontosText = document.getElementById("PontosText")
const spawner = document.getElementById("spawner")
const colector = document.getElementById("colector")
const input = document.getElementById("input")
const button = document.getElementById("button")
let colectorSize = 40
const moedaSize = 10
const geradorRect = spawner.getBoundingClientRect().left
let coins
let dentroDaArea
let x,y
const loja = document.getElementById("loja")

PontosText.innerText="0"
function lojaOnOff(){
    loja.classList.toggle("hideLoja")
}
function verificarColisao(mx,my,cX,cY,coinW,colectorH){
    let vY = Math.abs(my - (cY + 5))
    let vX = Math.abs(mx - (cX +5))
    let hitbox = Math.abs(parseInt(colectorH)/2 + parseInt(coinW)/2)
    return vY <= hitbox && vX <= hitbox
}    

spawner.addEventListener('mousemove',(e)=>{

    Xrelativo = e.clientX - geradorRect
    Yrelativo = e.clientY - geradorRect   
    dentroDaArea = Xrelativo >= 0 && Xrelativo <= 300 && Yrelativo >= 0 && Yrelativo <= 300

    coins.forEach(coin => {
    if (verificarColisao(Xrelativo,Yrelativo,parseInt(coin.style.left),parseInt(coin.style.top),moedaSize,colectorSize)){
        coin.remove()
        Pontos++
        PontosText.innerText = Pontos
        Qtd--}});
    colector.style.cssText = 
        `
        position: absolute;
        width: ${colectorSize}px;
        height: ${colectorSize}px;
        border-radius: 50%;
        background-color: gray;
        top:${Yrelativo- parseInt(colector.style.height)/2}px;
        left:${Xrelativo - parseInt(colector.style.width)/2}px;
        visibility: ${dentroDaArea ? 'visible' : 'hidden'};` }) 

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
    coins = document.querySelectorAll(".coin")
}

button.addEventListener('mousedown',()=>{
    colectorSize = input.value
})




document.getElementById('shop').addEventListener('click',  lojaOnOff);
document.getElementById('botaoFecharloja').addEventListener('click',  lojaOnOff);