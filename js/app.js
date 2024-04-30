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

    //opérateurs = + - * /  % < > ? ?? :
    let age = 24
    let annee = 2024
    console.log(age% 2)

    console.log(`Vous êtes né en ${annee - age}`)
    age% 2 == 0 ? console.log("Nombre paire") : console.log("Nombre impaire")

    let prix = 55 //ht 
    let taxe = 5.5
    console.log(`Le prix ttc est de ${prix + (prix*taxe /100)}`) //ttc


    const product=[
        {name: "car", price: 6000},
        {name: "Bike", price: 150},
        {name: "phone", price: 700},
        {name: "Watch", price: 200},
        {name: "pen", price: 8},
        {name: "bag", price: 50},
    ];
    console.log(product) 

    console.table(product)

        console.log(Object.values(product[0]))
        console.log(product[1].price)

        /*product.forEach((cle)=>{
           console.log(cle.name+ ` `+cle.price)
        })*/

        for(let data of product){
            console.log(data.name)
        }
        
        
        const filterRedItems = product.filter((row) => row.price  < 100)
        console.table(filterRedItems)

})()