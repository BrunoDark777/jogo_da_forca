import entradaDados from 'readline-sync';
import listaDeFrutas from './dados/dados';
import { atualizarPalavraOculta, validarLetraDigitada } from './funcoes/funcoes';

// Para o Bruno do futuro: o Math.floor() arredonda um número fracionado e o Math.random() retorna um nomero aleatório de 0 a 1.
const palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];

let letras = palavraEscolhida.length;

// Para ocultar a palavra com "_", mas deixando a primeira letra visível.
let primeiraLetra = palavraEscolhida[0];
let underline = "_".repeat(palavraEscolhida.length - 1);
let palavraOculta = primeiraLetra + underline;

console.log("------------- JOGO DA FORCA ------------");
console.log(`\nNome da fruta com ${letras} letras:`);

let statusJogo = 'andamento' //Jogo inicia com o status 'andamento'.
let chances = 4;

while(statusJogo === 'andamento'){

    console.log(`\nFruta: ${palavraOculta}`);

    const letraDigitada = entradaDados.question("Digite uma letra: ").toLowerCase();

    if(validarLetraDigitada(letraDigitada)){

    if(letraDigitada != atualizarPalavraOculta(palavraOculta)){
        chances--;
        console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chances`);
    }

    if(chances == 0){
        console.log("------------- Derrota ------------");
        statusJogo = 'encerrado';
    } else if(palavraEscolhida === palavraOculta){
        console.log("------------- VITÓRIA! Você adivinhou a palavra! ------------");
        statusJogo = 'encerrado';
    }
} else {
    console.log("Entrada inválida. Por favor, digite APENAS uma letra válida (a-z).");
}
}