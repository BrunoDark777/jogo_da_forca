import entradaDados from 'readline-sync';
import listaDeFrutas from './dados/dados';

// Para o Bruno do futuro: o Math.floor() arredonda um número fracionado e o Math.random(0, 1) retorna um nomero aleatório de 0 a 1.
const palavraEscolhida = listaDeFrutas[Math.floor(Math.random(0, 1) * listaDeFrutas.length)];

// Para ocultar a palavra com "_", mas deixando a primeira letra visível.
let primeiraLetra = palavraEscolhida[0];
let underline = "_".repeat(palavraEscolhida.length - 1);
let palavraOculta = primeiraLetra + underline;

console.log("------------- JOGO DA FORCA ------------");
