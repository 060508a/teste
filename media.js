function media(valor1,valor2,valor3){
    return (valor1+valor2 +valor3)/3;
}

document.getElementById("calcular").addEventListener("click",function(){
    let nota1 = Number(document.getElementById("nota1").value );
    let nota2 = Number(document.getElementById("nota2").value );
    let nota3 = Number(document.getElementById("nota3").value );
    let resultado = media(nota1,nota2,nota3);
    document.getElementById("resultado").textContent = "A média é: " + resultado.toFixed(2)

});