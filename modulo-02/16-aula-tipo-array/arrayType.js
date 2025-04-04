/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // ==> Exemplo 01 - Uso de Colchetes:
var frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);
// // ==> Exemplo 02 - Array Object (Objeto Array):
var frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[2]);
// // ==> Exemplo 03 - Adicionando mais strings com método 'push'
var indiomas = ['Português', 'Mandarim', 'Espanhol'];
console.log(indiomas);
indiomas.push('Francês');
console.log(indiomas);
// // ==> Exemplo 04 - Identificar tamanho do array - método 'length'
var indiomas1 = ['Português', 'Mandarim', 'Espanhol'];
console.log(indiomas1.length);
// // ==> Exemplo 05 - Exemplo de Array com Spread Operator
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArray(__spreadArray([], listaNumeros, true), [6, 7, 8, 9, 10], false);
console.log(listaNumeros);
// // ==> Exemplo 06 - Exemplo de Array com laço de iteração
var linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
