function InserirC(){
  let ca = document.getElementById("cabecalho")
  let texto = (document.getElementById("Text").value)
  let h1 = document.createElement("h1")

  if(texto.length != 0){
    h1.append(texto)
    ca.appendChild(h1)
  }
  else{
      alert("Impossível adicionar conteudo nulo")
  }
}

function InserirP(){
  let pa = document.getElementById("pa")
  let texto = (document.getElementById("Text").value)
  let p = document.createElement("p")

  if(texto.length != 0){
    p.append(texto)
    pa.appendChild(p)
  }
  else{
      alert("Impossível adicionar conteudo nulo")
  }
}
