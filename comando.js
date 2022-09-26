function esconder(){
 var esconder = document.getElementById("esconder").style.display;
 if (esconder == "one")
 document.getElementById("esconder").style.display = "block"
 else
 document.getElementById("esconder").style.display = "none"


}
/*
function esconder(){
document.querySelector("esconder").style.display = "none";
var hide = document.getElementById("esconder");

if(hide.style.display =="none"){
    hide.style.display = "block";
}else{
    hide.style.display = "none";
}
*/




function criptografar(){
    var inTexto = document.getElementById("entrada-texto").value;

    var textoCriptografado = inTexto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    document.getElementById("saida-texto").value = textoCriptografado;


}

function descriptografar(){

    var outTexto = document.getElementById("saida-texto").value;

    var textoDescriptografado = outTexto
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai", "a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    document.getElementById("saida-texto").value = textoDescriptografado;


}
function copiaTexto(){
    document.getElementById("saida-texto").select();
    document.execCommand("copy");



}



