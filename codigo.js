

function notas(){
    let nome = document.getElementById('nome').value

    let nota1 = parseInt(document.getElementById('nota1').value)
    let nota2 = parseInt(document.getElementById('nota2').value)
    let nota3 = parseInt(document.getElementById('nota3').value)

   ValorMédia = (nota1 + nota2 + nota3)/3

    if(ValorMédia>=6)
    document.getElementById('valor').innerHTML =`Olá ${nome} sua média é ${ValorMédia}, você está APROVADO`
    else{
    document.getElementById('valor').innerHTML=`${nome},sua média foi ${valorMédia},você foi  Reprovado!!`;

    }

}


    
