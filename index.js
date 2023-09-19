//Variável para armazenar o XP do herói
var xp = 9001

//Variável para armazenar o nivel do herói
var nivelHeroi;

//Variável para armazenar o nome do herói
var nomeHeroi= "Mugato"

//Usei switch case como estrutura
switch (true){
    case xp < 1000:
    nivelHeroi = "Ferro";
    break;
    case xp >= 1001 && xp <= 2000:
    nivelHeroi = "Bronze";
    break;
    case xp >=2001 && xp <= 5000:
    nivelHeroi ="Prata";
    break;
    case xp >=6001 && xp <= 7000:
    nivelHeroi= "Ouro"
    break;
    case xp >= 7001 && xp<= 8000:
    nivelHeroi= "Platina"
    break;
    case xp >= 8001 && xp<= 9000:
    nivelHeroi= "Ascendente"
    break;
    case xp >= 9001 && xp<= 10000:
    nivelHeroi= "Imortal"
    break;
    case xp >= 10001:
    nivelHeroi= "Radiante"
    break
}

//Saída de mensagem
console.log(nomeHeroi + " está no nível " + nivelHeroi)
    