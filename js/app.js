(()=>{

  console.log("Hello javascript")
  const version = 8.2
  let nom = String("Javascript")
  console.log(nom) 
  let phone = 20.00
  const bool = true
  const x = null
  console.log(typeof phone)
  const langs = ["html", "css", "js", true]
  console.log(langs)
  console.table(langs)
  const User = {
    nom: "Doe",
    prenom: "John",
    age: 30,
    ville: "NY",
    pays: "USA"
  }
console.log(User)
console.table(User)
console.log(`${User.nom} : ${User.prenom}`)
console.log(langs.length)
/* for(let i = 0; i <langs.length < 4; i++){
    console.log(langs[i])
} */
let i =0;
while(i < langs.length){
    console.log(`${i} : ${langs[i]}`) 
    i++
}
/*for (let index in User){
    console.log( `${index} : ${User[index]}`)
} */


    const persons =[
        {
            nom : "Berner Lee",
            prenom : "Tim"
        },
        {
            nom : "Each",
            prenom : "Branden"
        }
    ]
    console.log(Object.values(persons)); 
    console.table(persons)
    persons.forEach((cle)=>{
        console.log(cle.nom+ ' '+cle.prenom)
    })

})()