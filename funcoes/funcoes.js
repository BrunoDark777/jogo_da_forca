//Função para atualizar a palavra oculta, o .split() transforma a string em um array de caracteres e o .join() tranforma o array novamente em string:
function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida){
    let palavraOcultaArray = palavraOculta.split('');

    for(let i = 0; i < palavraEscolhida.length; i++){
        if(letraDigitada === palavraEscolhida[i]){
            palavraOcultaArray[i] = letraDigitada
        }
    }

    return palavraOcultaArray.join('') //Converte o array de caracteres de novo em string.
}

//Função que verifica se a letra digitada pelo usuário é um caractere único e alfabético, ao usar o .match(/[a-z]/), defino que a letra digitada deve ser um caractere alfabético:
function validarLetraDigitada(letraDigitada){
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
        return true;
    } else {
        return false;
    }
}

export {atualizarPalavraOculta, validarLetraDigitada};