/*
    Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis * nome e xp dos herois
- Operadores * feito
- Laços de repetição * para pegar 4 herois = feito
- Estruturas de decisões * feito

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" = pendente

 
*/
const prompt = require('prompt-sync')({ sigint: true }); // { sigint: true } allows Ctrl+C to exit

console.log("Entre com 4 herois para criar um time de lendarios e enfrentar as aventuras deste RPG clássico...");

let novoHeroi = [];
let arrayGuardaHerois = [];

function guardaHerois(nome, xp, nivel)
{
    novoHeroi.push(nome, xp, nivel);    
}

function verificaExp(xp, name, nivelName)
{
    if(xp <= 1000)
    {
        nivelName ="Ferro";
        guardaHerois(name, xp, nivelName);
    }
    else if(xp >= 1001 && xp <= 2000)
    {
        nivelName = "Bronze";
        guardaHerois(name, xp, nivelName);      
    }
    else if(xp >= 2001 && xp <= 5000)
    {
        nivelName = "Prata";
        guardaHerois(name, xp, nivelName);     
    }
    else if(xp >= 5001 && xp <= 7000)
    {
        nivelName = "Ouro";
        guardaHerois(name, xp, nivelName);      
    }
    else if(xp >= 7001 && xp <= 8000)
    {
        nivelName = "Platina";
        guardaHerois(name, xp, nivelName);
    }
    else if(xp >= 8001 && xp <= 9000)
    {
        nivelName = "Ascendente";
        guardaHerois(name, xp, nivelName);
    }
    else if(xp >= 9001 && xp <= 10000)
    {
        nivelName = "Imortal";
        guardaHerois(name, xp, nivelName);
    }
    else if(xp >= 10001)
    {
        nivelName = "Radiante";
        guardaHerois(name, xp, nivelName);
    }

    console.log(`A XP do heroi é = ${xp} e ele esta no nivel ${nivelName} `);
}

for(i = 0; i <= 3; i++)
{
    let nivelName = null;
    let contador = i+1;
    

    const name = prompt(`Entre com o nome do Heroi ${contador}: `);
    console.log(`Heroi ${contador}, ${name}!`);

    const xp = prompt(`Entre com o nivel de XP do seu heroi: `);

    
    
  
        verificaExp(xp, name, nivelName); 
       
     
}



console.log(novoHeroi.toString());







