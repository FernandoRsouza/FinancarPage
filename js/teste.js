// var ponto = 49,life =28
// if (ponto >= 35 && life >=25) {
//     console.log("vc venceu")
    
// }else{
//     console.log("vc perdeu")
// }
// var pontos = 545
// if (pontos >= 1000) {
//     pos =1    
// }else if(pontos >=800){
//     pos=2
// }else if(pontos >=600){
//     pos =3
// }

// var pos

//  switch (pos) {
//      case 1:
//          console.log("vc chegou  em primeiro")
//          break;
//          case 2:
//             console.log("vc chegou  em segundo")
//             break;
//             case 3:
//                 console.log("vc chegou  em terceiro")
//                 break;
 
//      default:
//         console.log("vc não classificou")
//          break;
//  }
// var cor=[],pos
// cor.push("amarelo")
// cor.push("preto")
// cor.push("verde")
// cor.push("rosa")
// cor.push("vermelho")
// cor.unshift("marrom")
// cor.pop()
//  cor.shift()
// cor.splice(2,1)
// pos = cor.indexOf("blue")
// // console.log(pos)
// if (pos < 0) {
//     console.log("não temos essa cor")
// }else{
//     console.log("temos essa cor na posição: "+pos)
// }
// var mochila = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]

// for(var l = 0 ;l < 3; l++){
//     for(var c = 0; c<5; c++){
//     console.log(mochila[l][c])}
//     console.log("\n")
// }
// var num = 11
// try {
//     if (num >10) {
//         throw new Error("valor digitado é invalido") 
//     }
    
// } catch (e) {
//     console.log("vc digitou numero invalido "+e.Error)
//     num=10
// }finally
// console.log(`valor maximo permitido é ${num}`)
// }
// var pago
// pago =150


// if (pago <500 ) {
//     console.log(`cliente pagou R$${pago} ainda falta  R$${500-pago}`)
//     }
// var data =  new Date
// var diaSemana = data.getDay()
// var dat = data.getDate()
// var mes = data.getMonth()
// var ano = data.getFullYear()
// var meses = ["jan","fev","mar","abri","mai","jun","ju","ago","set","out","nov","dez"]
// var semana = ["dom","seg","ter","quar","qui","sex","sab"]
//  console.log(semana[diaSemana]+" " +dat+" de "+meses[mes] +" de "+ano)
var numeros = new Array(1,2,3)
function media(nums){
     var tam = nums.length
     var soma =0
     for(let i = 0; i< tam; i++){
         soma +=nums[i]

     }
     return Math.round(soma/tam)

}
console.log(media(numeros))

