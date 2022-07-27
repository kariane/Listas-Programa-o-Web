function convertendo(){
  let Celsius = parseInt(document.getElementById("Celsius").value)
  let resposta = document.getElementById("resposta")

  let Fahrenheit = (Celsius * (1.8) + 32)

  resposta.innerHTML = Fahrenheit
}