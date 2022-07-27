function CreatePerson(name, age, height, weight, genre){
  return {
    name: name,
    age: age,
    height: height,
    weight: weight,
    genre: genre
          };
}
let personA=CreatePerson("Kariane", 18, 1.64, 70, "Female")
let personB=CreatePerson("Felipe", 22, 1.88, 88, "Male")

function addAtribute(person){
  if(person.age >= 18){
       document_cpf = 44020098808
      person.document_cpf = document_cpf
  }
}

function DisplayPerson(person){
      for(let info in person){
          console.log(info + " - " + person[info] )
      }
      console.log('')
}