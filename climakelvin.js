/*
    Conversão de temperaturas
    Senais Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data 02/08/2023
*/

/* Abaixo, teremos uma constante mostrando a previsão do tempo para hoje, em graus Kelvin. */
const kelvin = 0

/* Para converter o valor de Kelvin para Celsius, é necessário subtrair 273 graus, como feito abaixo. */
const celsius = kelvin-273
console.log(celsius) /* Resultado: 20 */

/* Agora, o valor em Celsius, obtido no código anterior, será convertido para Fahrenheit. */
let fahrenheit = celsius * (9/5) + 32
/*Abaixo, utiliza-se o "Math.floor" para arredondar o resultado do código anterior. */
fahrenheit = Math.floor(fahrenheit)
console.log(`A temperatura é de ${fahrenheit} graus Fahrenheit`) /* Resultado: 68 */

/* Exercício 11 - Resultado: A temperatura de 0 graus Kelvin em Fahrenheit é igual a -460 graus Fahrenheit. */

newton = celsius * (33/100) /* Exercício 12 */
newton = Math.floor (newton)
console.log(newton) /* Resultado: -91 */





