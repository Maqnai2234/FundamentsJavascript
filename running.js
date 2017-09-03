const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
const nombre = "Alexei"

function correr(){
    const min = 5
    const max = 15
    return Math.round(Math.random() * (max - min) + min)
}
let totalKms = 0
for (let i in dias) {
  const kms = correr()
  totalKms += kms
  console.log(`el dia ${dias[i]}, ${nombre} corrió ${kms} kms.`);
}
console.log(`${nombre} durante la semana corrio ${totalKms} kms.`)
const promedio = totalKms / dias.length
console.log(`En promedio ${nombre} corrio ${promedio.toFixed(2)} kms.`);
