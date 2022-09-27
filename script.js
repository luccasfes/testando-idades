const anoNasc = document.querySelector('#data')
const botao = document.querySelector('botao')
const sexo = document.getElementsByName('sexo')
const resultado = document.querySelector('#resultado')
const img = document.querySelector("#img")

function calcular(){ 
    let date = new Date()
    let anoAtual = date.getFullYear()
    let idade = anoAtual - anoNasc.value

    if(anoNasc.value > anoAtual ||anoNasc.value < 0 || anoNasc.value == "" || idade > 122 || idade < 0 ){
        alert("Ano de Nascimento inválido!") 
    }

    else if(sexo[0].checked){
        resultado.innerHTML = "<p> Homem com " + idade + "anos</p>"

     if( idade < 10){
        img.src= "Fotos/criançaM.img.jpg "
    } else if(idade < 25){
        img.src= "Fotos/adolescenteM.img.jpg"
       } else if(idade < 55){
        img.src= "Fotos/adultoM.img.jpg"
       } else{
        img.src= "Fotos/idosoM.img.jpg"
       }    

    } else if(sexo[1].checked){
        resultado.innerHTML = "<p> Mulher com " + idade + "anos</p>"

     if( idade < 10){
        img.src= "Fotos/criançaF.img.jpg"
       } else if(idade < 25){
        img.src= "Fotos/adolescenteF.img.jpg"
       } else if(idade < 55){
        img.src= "Fotos/AdultaF.img.jpg"
       } else{
        img.src= "Fotos/idosaF.img.jpg"
       }     
    
       }
    

 }
