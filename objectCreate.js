// function Punto(x,y){
//  this.x = x
//  this.y = y
// }
//
// Punto.prototype.moverX = function moverX(x){
//   this.x += x
// }
//
// Punto.prototype.moverY = function moverY(y){
//   this.y += y
// }
//
// Punto.prototype.distancePoints = function distancePoint(p){
//   const x = this.x - p.x
//   const y = this.y - p.y
//   return parseFloat(Math.sqrt(x * x + y * y).toFixed(2))
// }

const Punto = {
  init: function init(x,y){
    this.x = x
    this.y = y
  },
  moverX: function moverX(x){
    this.x += x
  },
  moverY: function moverY(y){
    thix.y += y
  },
  distancePoints: function distancePoints(p){
    const x = this.x - p.x
    const y = this.y - p.y
    return parseFloat(Math.sqrt(x * x + y * y).toFixed(2))
  }
}

let p1 = Object.create(Punto)
let p2 = Object.create(Punto)

p1.init(0,4)
p2.init(3,0)


p1.moverX(5)

console.log(`La distancia entre ${p1.distancePoints(p2)}`)
