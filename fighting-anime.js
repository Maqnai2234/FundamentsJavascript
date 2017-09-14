let lifeGoku = 100
let lifeSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

let round = 1

const ambosSiguenVivos = () => lifeGoku > 0 && lifeSuperman > 0

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

const fight = (goku, superman) => {
  if(goku > superman ){
    console.log(`GOKU ATACA A SUPERMAN CON UN GOLPE DE ${goku}`)
    lifeSuperman -= goku
  }
  else {
    console.log(`SUPERMAN ATACA A GOKU CON UN GOLPE DE ${superman}`)
    lifeGoku -= superman
  }
}

while (ambosSiguenVivos()) {
  console.log(`Round ${round}`)

  const golpeGoku = calcularGolpe()
  const golpeSuperman = calcularGolpe()
  fight(golpeGoku,golpeSuperman)
  round++
}

if (lifeGoku > 0) {
  console.log(`GOKU GANO LA PELEA, SUS PUNTOS DE VIDA SON ${lifeGoku}`)
}
else{
  console.log(`SUPERMAN GANO LA PELEA, SUS PUNTOS DE VIDA SON ${lifeSuperman}`)
}
