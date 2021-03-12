function botao(){
    alert("Hello! OwO)/");
    document.getElementById("Clicou").innerHTML = "<b>OwO)/ Clique aqui!</b>";

}
function Redirecionar(){
    window.open("https://battlecats.club/en/series/battlecats/");
    window.location.href = "https://battle-cats.fandom.com/wiki/Battle_Cats_Wiki";//Mesma janela
}

function trocar(elemento){
    //alert("Mostrando...");
    //document.getElementById("Passar").innerHTML = "\nPesquise Battle Cats! Y has las tareas ^w^";
    elemento.innerHTML = "\nPesquise Battle Cats! Y has las tareas ^w^";
}
function back(elemento){
    //document.getElementById("Passar").innerHTML = "Quer mais referencias? Passe o mouse por aqui";
    elemento.innerHTML = "Quer mais referencias? Passe o mouse por aqui";
}
function carregando(){
    alert("Bem vindo(a) a página de teste de JavaScript feito para os BattleCats!")
}

function Change(elemento){
    console.log(elemento.value);
}
/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}

var idade =  prompt("Qual a sua idade? ")
console.log(validaIdade(idade))
*/

/*function soma(n1,n2){
    return n1 + n2;

}
console.log(soma(5,10));
*/

/*var d = new Date();
alert(d);
console.log(d.getMonth()+1);
*/

/*var count;
for(count=0; count<=5; count++){
    console.log(count);
}
*/

/*var count = 0;
while(count<=5){
    console.log(count);
    count++;
}

*/

/*var idade = prompt("Qual a sua idade? ");
if(idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}
*/

var hatsune = [{nome: "Hatsune Miku", vestimenta: "Azul"},{nome:"Kagamine Rin", vestimenta:"Amarela"},{nome:"Kagamine Len",vestimenta:"Amarelo"},{nome:"Megurine Luka",vestimenta:"Rosa"},{nome:"Shion Kaito",vestimenta:"Azul-Marinho"},{nome:"Sakine Meiko",vestimenta:"Vermelho"}]
console.log(hatsune)

/*var hatsune = {nome:"Hatsune Miku", vestimenta:"Azul"}
console.log(hatsune.nome);
alert(hatsune.vestimenta);
*/

/*var hatsune = ["Hatsune Miku","Kagamine Rin", "Kagamine Len"];
hatsune.push("Sakine Meiko");
//hatsune.pop();//Para retirar o último elemento
console.log(hatsune);
console.log(hatsune[0]);
//console.log(hatsune.reverse());
console.log(hatsune.toString());
console.log(hatsune.join(" - "));
*/

/*
var nome = "Janeth Mamani";
var idade = 22;
//alert("Bem vindo " + nome + ". Você tem " + idade);

//alert("Warning: This is for the cats OwO");

console.log(nome);
console.log(idade);

var frase = "Eu amo gatos!"
console.log(frase.replace("amo", "gosto muito de"));
console.log(frase.toUpperCase())
*/
