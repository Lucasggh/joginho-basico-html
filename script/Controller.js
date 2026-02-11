
let moedaSize = 10
let Pontos = 0
let Qtd = 0
export function calcularColisao(X,Y,geradorRect,coins,colectorSize){
    Xrelativo = X - geradorRect
    Yrelativo = Y - geradorRect   
    dentroDaArea = Xrelativo >= 0 && Xrelativo <= 300 && Yrelativo >= 0 && Yrelativo <= 300



        coins.forEach(coin => {
        if (verificarColisao(Xrelativo,Yrelativo,parseInt(coin.style.left),parseInt(coin.style.top),moedaSize,colectorSize)){
            coin.remove()
            Pontos++
            Qtd--}});


            return {dentroDaArea}

}

