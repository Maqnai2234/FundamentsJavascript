const startWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameOne = "Alexei"
const ageOne = 23

const nameTwo = "Paul"
const ageTwo = 10

function canWatchStarWars7(name, age, isWithAdult = false){
  if (age > pgStarWars7){
    alert(`${name}, si puede entrar a ver ${startWars7}.`)
  }
  else if (isWithAdult) {
    alert(`${name}, si puede entrar a ver ${startWars7}, solo junto a su acompañante`)
  }
  else {
    alert(`${name}, no puede entrar a ver ${startWars7},
      Tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
}


canWatchStarWars7(nameOne,ageOne)

canWatchStarWars7(nameTwo,ageTwo,true)
