function calcular(event){
    event.preventDefault()

    let alcoolInput = document.getElementById('alcool').Value
    let gasolinaInput = document.getElementById('gasolina').Value

    let contentResult = document.getElementById('content-result')
    let textResult = document.getElementById('text-result')

    let gasolinaSpan = document.getElementById('gasolina-result')
    let alcoolSpan = document.getElementById('alcool-result')

    let calculo = alcoolInput / gasolinaInput

    if(calculo <0.7){
        textResult.innerHTML = 'Compensa usar Alcool'
    }
    else{
        textResult.innerHTML = 'Compensa usar Gasolina'
    }
    gasolinaSpan.innerHTML = 'Gasolina R$' + gasolinaInput
    alcoolSpan.innerHTML = 'Alcool R$' + alcoolInput

    contentResult.classList.remove('hide')
}