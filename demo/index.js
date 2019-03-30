var WordsNoise = require('../WordsNoise.js');

var wn = new WordsNoise();
var cifrado = wn.addNoise('texto de prueba');
console.log(cifrado);
var descifrado = wn.quitNoise(cifrado);
console.log(descifrado);