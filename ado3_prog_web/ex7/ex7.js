function contarVogais(){
  let text = (document.getElementById("text").value)
  numVogais = text.match(/[uioae]/gi)

  if(numVogais === null){
    resposta.innerHTML = 0
  }else{
    resposta.innerHTML = numVogais.length
  }
}