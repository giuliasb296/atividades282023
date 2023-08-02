/*
    Exercícios de JavaScript
    Senai Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data: 02/08/2023
*/    

var favoritefood = ('pizza') /* Exercício 1 */

var numOfSlices = 8 /* Exercício 2 */

console.log(favoritefood) /* Exercício 3 - Resultado: pizza */

console.log(numOfSlices)  /*Exeercício 4 - Resultado: 8 */

/* Exercício 5 - A diferença entre as palavras-chave "let" e "var", utilizadas para declarar variáveis, é que, a primeira, respectivcamente, é mais atual e, além disso, ela pode ser atualizada, mas, não pode ser declarada novamente, diferente da "var" que pode ser declarada dentro do seu escopo. */ 

let changeMe = (true) /* Exercício 6 */
changeMe = (false) /* Exercício 7 */
console.log(changeMe) /* Exercício 8 - Resultado: false*/

const entree = ('Enchiladas') /* Exercício 9 */
console.log(entree) /* Exercício 10 - Resultado: Enchiladas */

/*entree = ('Teste')   
console.log(entree) Exercício 11 - Resultadp: Esse código deve dar erro ao ser executado, já que estou reatribuindo um valor par a const. */

let levelUp = 0  /* Exercício 12 */
levelUp += 5
console.log(levelUp) /* Resultado: 5 */


let powerLevel = 150 /* Exercício 13 */
powerLevel -= 100
console.log(powerLevel) /* Resultado: 50 */

let multiplyMe = 347 /* Exercício 14 */
multiplyMe *= 11
console.log(multiplyMe)  /* Resultado: 3817 */

let quarterMe = 16 /* Exercício 15 */
quarterMe /= 4
console.log(quarterMe) /* Resultado: 4 */

let gainedDollar = 1 /* Exercício 16 */
gainedDollar ++ 
console.log(gainedDollar) /* Resultado: 2 */

let lostDollar = 1 /* Exercício 17 */
lostDollar -- 
console.log(lostDollar) /* Resultado: 0 */

let myName = ('Giulia') /* Exercício 18 */ 
let myCity = ('São Paulo')
console.log(`My name is ${myName} and my favorite city is ${myCity}.`) /* Resultado: My name is Giulia and my favorite city is São Paulo. */

let newVariable = ('Nova Variável') /* Exercíco 19 */
console.log(typeof newVariable) /* Resultado: string */











