let nomeVelha = prompt("Digite o nome da pessoa mais velha")
if(nomeVelha == null){

    alert('Você cancelou!')
    
}else{
    let idadeVelha = prompt("Digite a idade da pessoa mais velha")

    let nomeNova = prompt('Digite a idade da pessoa mais velha')
    let idadeNova =  prompt('Digite a idade da pessoa mais nova')
    
    let diferencaIdade = idadeVelha - idadeNova
    
    alert(
        "Nome da pessoa mais velha:\n " + nomeVelha +
        "\n\n Nome da pessoa mais nova: \n" + nomeNova+
        "\n\n A diferença de idade é de \n" + diferencaIdade + 
        " anos."
        )





    // alert("Nome da pessoa mais nova: " + nomeNova)
    // alert("A diferença de idade é de " + diferencaIdade + " anos.")
    
    // alert()
}



