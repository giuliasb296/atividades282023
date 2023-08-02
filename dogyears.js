/*
    Conversão de temperaturas
    Senais Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data 02/08/2023
*/

/* A variável abaico armazena a minha idade em anos humanos. */
let myAge = 16

/* Esses são os dois primeiros anos da vida de um cão, que contam mais que os anos subsequentes. */
let earlyYears = 2
earlyYears = earlyYears * 10.5
console.log(earlyYears)

/* O código abaixo representa a subtração dos dois anos humanos que foram convertidos, anteriormente, a anos de vida de um cão. */
let laterYears = myAge - 2

/*O código abaixo, multiplicará por 4 (a quantidade dos anos de "cão"), os anos subsequentes aos dois primeiros. */
laterYears = laterYears * 4
console.log(laterYears)

/* Exercício 6 - Sim, os valores correspondem ao esperado. */

/*A variável seguinte representa a minha idade em "anos de cão". */
myAgeInDogYears = earlyYears + laterYears
console.log (myAgeInDogYears)

let myName = 'Giulia'.toLowerCase()
/* A próxima linha de código converterá o meu nome para letras minúsculas. */
console.log(`Meu nome é ${myName}. Tenho ${myAge} anos humanos, que são ${myAgeInDogYears} anos em anos de cão.`)