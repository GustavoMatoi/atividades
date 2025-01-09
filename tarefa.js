/*
1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

*/

const atividade1 = (indice) => {
    let k = 0
    let soma = 0 //let porque as duas variaveis serão alteradas
    while (k < indice) {
        k++
        soma += k
    }

    console.log(soma)
}

/* 
2) Dado a sequência de Fibonacci, 
onde se inicia por 0 e 1 e o próximo valor sempre será a
 soma dos 2 valores anteriores 
 (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
 linguagem que desejar onde, informado um número, ele calcule a sequência de 
 Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

*/

const atividade2 = (numPertencente) => {
    let fibonacci = [0, 1]
    while (fibonacci[fibonacci.length - 1] < numPertencente) {
        const proxValor = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]
        fibonacci.push(proxValor)
    }
    console.log(fibonacci)
    if (fibonacci.includes(numPertencente)) {
        console.log("O número pertence à sequência!")
        return true
    } else {
        console.log("O número não pertence à sequência.")
        return false;
    }
};


/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, 
na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/


const faturamentoMensal = require('./tarefa.json');

const atividade3 = (faturamentos) => {
    let menorValor = 9999;
    let maiorValor = 0;
    let arrayValores = [];
    
    for (let i = 0; i < faturamentos.faturamento_diario.length; i++) {
        const valor = faturamentos.faturamento_diario[i].valor
        
        if (valor < menorValor && valor !== 0) {
            menorValor = valor;
        }

        if (valor > maiorValor && valor !== 0) {
            maiorValor = valor;
        }

        if (valor !== 0) {
            arrayValores.push(valor)
        }
    }

    console.log('menor valor:', menorValor);  
    console.log('maior valor:', maiorValor); 
    console.log(arrayValores.length);        
    console.log('média:', calculaMedia(arrayValores, arrayValores.length));  
};


const calculaMedia = (valores, quantidade) => {
    let media = 0
    for(let i = 0; i < quantidade; i ++){
        media += valores[i]
    }
    return (media/quantidade).toFixed(2)
 }

atividade3(faturamentoMensal)
/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o 
percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

*/

const atividade4 = (faturamentos) => {
    let porcentagens = [
        {
            estado: 'SP',
            porcentagem: 0
        },
        {
            estado: 'RJ',
            porcentagem: 0
        },
        {
            estado: 'MG',
            porcentagem: 0
        },
        {
            estado: 'ES',
            porcentagem: 0
        },
        {
            estado: 'Outros',
            porcentagem: 0
        }
    ]
    let valorInicial = 0
    const valorTotal = faturamentos.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        valorInicial,
    );

    console.log(valorTotal) //180759.98
    for (i = 0; i < faturamentos.length; i++) {
        porcentagens[i].porcentagem = ((faturamentos[i] / valorTotal) * 100).toFixed(2) + "%"
    }
}

const arrayFaturamentos = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53]
/* 
Saída: 
┌─────────┬──────────┬─────────────┐
│ (index) │ estado   │ porcentagem │
├─────────┼──────────┼─────────────┤
│ 0       │ 'SP'     │ '37.53%'    │
│ 1       │ 'RJ'     │ '20.29%'    │
│ 2       │ 'MG'     │ '16.17%'    │
│ 3       │ 'ES'     │ '15.03%'    │
│ 4       │ 'Outros' │ '10.98%'    │
└─────────┴──────────┴─────────────┘
*/



/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/

const atividade5 = (palavra) => {
    let palavraReversa = ''
    for (let i = 1; i <= palavra.length; i++) {
        palavraReversa += palavra[palavra.length - i]
    }
    console.log(palavraReversa)
}

console.log("Atividade 1 com entrada 13:")
atividade1(13) // retorna 91 

console.log("Atividade 2 com entradas 6, 999 e 13:")

atividade2(6) //Não pertence
atividade2(999) //Não percente
atividade2(13) // Percente

console.log("Atividade 4 com json ficticio:")

atividade4(arrayFaturamentos) // As saídas estão dentro da função

console.log("Atividade 5 com entrada Gustavo e Angular:")

atividade5('Gustavo') //ovatsuG
atividade5('Angular') //ralugnA