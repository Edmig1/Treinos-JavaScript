// ! Múltiplos de 2
// var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// var par = []

// for(var indi = 0; indi < num.length; indi++) {
//     var resto = num[indi] % 2

//     if (resto == 0){
//         par.push(num[indi])
//     }
// }

// console.log(num)
// console.log(par)

// ? Múltiplos de 5

// var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// var par = []

// for(var indi = 0; indi < num.length; indi++) {
//     var resto = num[indi] % 5

//     if (resto == 0){
//         par.push(num[indi])
//     }
// }

// console.log(num)
// console.log(par)

// TODO lista strings

// let palavras = ["bolo","basqueroto","cadastro","pastel","feira"]
// let l5 = palavras.filter (function (elemento) {
//     return elemento.length >5
// })
// console.log(palavras)
// console.log(l5)

// * lista strings for

// var palavras = ["bolo","basqueroto","cadastro","pastel","feira"]
// var l5 = []

// for(var indice = 0; indice < palavras.length; indice = indice + 1){
//     var maisq5 = palavras[indice]

//     if(maisq5.length > 6) {
//         l5.push(palavras[indice])
//     }
// }

// console.log(palavras)
// console.log(l5)

// ! Média

// var num = [10, 20, 5, 8, 3, 11, 16]
// var m = []
// var s = 0
// for(var item = 0; item < num.length; item++){
//     s += num[item]
//     m = s / num.length
// }
// console.log ("A soma foi: " + s)
// console.log ("A média foi: " +m.toFixed(0) )


// * Apenas Números Pares

// var num = [2,4,6,8,10,13]
// var pares = true
// for(var indi = 0; indi < num.length; indi++) {
//     if (num[indi] % 2 !== 0){
//         pares = false
//     }
// }
// console.log (pares)

// ? Algum par?

// var num = [11, 13, 15]
// var pares = false
// for(var indi = 0; indi < num.length; indi++) {
//     if (num[indi] % 2 == 0){
//         pares = true
//     }
// }
// console.log (pares)

// ! Concatenate

// var num = [1, 2, 3, 4, 5, 6, 7]
// var letras = ["nicolas", "negão?", "aaah aaah zé da manga"]
// let junto = num.concat(letras)
// console.log(junto)

// *P0 + p0 + p1 + p2, etc

// var num1 = [1, 2, 3, 4, 5, 6, 7]
// var num2 = [8,9,10,11,12, 13, 14]
// var juntos = []

// for(var item = 0; item < num1.length; item++){
//     juntos.push(num1[item] + num2[item])
// }
// console.log(juntos)

// TODO alternados caoncat

// var num = [1, 2, 3]
// var letras = ["nicolas", "negão?", "aaah aaah zé da manga"]
// var jun = []

// for(item = 0; item < num.length; item++){
//     jun.push(num[item])
//     jun.push(letras[item])
// }
// console.log(jun)

// ! MATRIZES

// ? Matriz 3x3

// var matriz = [
//     [5, 7, 8],
//     [1, 2, 3],
//     [9, 10, 11]
// ]
// var soma = 0

// for (var linha = 0; linha < matriz.length; linha++) {
//     for (var coluna = 0; coluna < matriz[linha].length; coluna++) {
//         soma = (matriz[linha][coluna]) +soma
//     }
// }
// console.log(soma)

// TODO matriz pares

// var matriz = [
//     [1,2,3,4],
//     [2,3,4,5]
// ]
// let mult = []
// let par = 1

// for (var linha = 0; linha < matriz.length; linha++) {
//     for (var coluna = 0; coluna < matriz[linha].length; coluna++) {
//         mult.push(matriz[linha][coluna])
//         if(matriz[linha][coluna] % 2 == 0){
//            par = matriz[linha][coluna] *par

//         }
//     }

// }
// console.log(par)

// * Multiplicação e entrega do resultado em matriz

// var matriz = [
//     [1,2,3,4],
//     [2,3,4,5]
// ]
// var ma = []
// let n = 4

// for (var linha = 0; linha < matriz.length; linha++) {
//     var lista = []
//     for (var coluna = 0; coluna < matriz[linha].length; coluna++){
//         var mult = (matriz[linha][coluna] *n)
//         lista.push(matriz[linha][coluna])


//     }
//     ma.push(lista)
// }
// console.log(ma)

// ! Matriz invertia

// var matriz = [
//     [1,2,3],
//     [0,5,4],
//     [6,7,9]
// ]
// var ma = []

// for (var linha = 0; linha < matriz.length; linha++) {
//     var lista = []
//     for (var coluna = 0; coluna < matriz[linha].length; coluna++){
//         lista.push(matriz[coluna][linha])
    
        

//     }
//     ma.push(lista)
    
// }
// console.log(ma)

// var matriz = [
//     [1,2,3],
//     [0,5,4],
//     [6,7,9]
// ]

// var linha1 = (matriz[0])
// var ultima = matriz.lenght -1

// console.log(matriz)

// todo MAIOR DA NUM DA MATRIZ

// var matriz = [
//     [1,5,7],
//     [2,6,4],
//     [8,9,3],
//     [14,3,70]
// ]
// filtrado = []
// for (var linha = 0; linha < matriz.length; linha++) {
//     var min = Math.min(...matriz[linha]);
//     var max = Math.max(...matriz[linha]);
//     filtrado.push(min, max)

// }
// filmin = Math.min(...filtrado)
// filmax = Math.max(...filtrado)
// console.log("O Menor e Maior números, são respectivamente: " + filmin,"e", filmax)

// ? MATRIZ IDENTICAS

// var matriz1 = [
//     [1,5,7],
//     [2,6,4],
//     [8,9,3],
//     [14,3,70]
// ]

// var matriz2 = [
//     [1,5,7],
//     [2,6,4],
//     [8,9,3],
//     [14,3,70]
// ]
// var sn = "Iguais"
// if (matriz1.length != matriz2.length){
//     sn = "Diferentes"
    
// }else{
// for (var linha = 0; linha < matriz1.length; linha++) {
//     for (var coluna = 0; coluna < matriz1[linha].length; coluna++){
//         if (matriz1[linha][coluna] != matriz2 [linha][coluna]){
//             sn = "Diferentes"
//             break
//         }
//         if (matriz1[linha].length != matriz2 [linha].length){
//             sn = "Diferentees"
//             break
//         }
//     }
// }
// }
// console.log(sn)

// !!!!!! FUNÇOES JS


// function soma(n1 = 1, n2 = 2){
//     let somar = n1 + n2
//     console.log(somar)
// }
// soma()


// * Soma de lista
// var soma = 0
// var lista = []
// function somarlistas(lista){
// for (let item = 0; item < lista.length; item++) {
//     soma = soma + lista[item]

// }
// console.log(soma)}

// console.log("Digite somarlistas() e atribua os números desejados:")


// todo add e list
var lista = []
function add(num){
    var adicionar = prompt("Digite um número:"  )
    lista.push(adicionar)
    var maisum = prompt("Deseja colocar mais um?: digite 1 para sim e 2 para não"  )
    if(maisum == "1"){
        add()
    }else if(maisum == "2"){
        
    }
    

}
add()
function listar (){
    console.log(lista)
}
listar()

