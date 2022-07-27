function IserirS(){
  let text = (document.getElementById("text").value)
  let Select = document.getElementById("Select")

  let op = new Option(text)

  Select.add(op)
}