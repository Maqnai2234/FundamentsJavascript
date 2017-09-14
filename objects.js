function Punto(x,y){
 this.x = x
 this.y = y
}

Punto.prototype.moverX = function moverX(x){
  this.x += x
}

Punto.prototype.moverY = function moverY(y){
  this.y += y
}

Punto.prototype.distancePoints = function distancePoint(p){
  const x = this.x - p.x
  const y = this.y - p.y
  return parseFloat(Math.sqrt(x * x + y * y).toFixed(2))
}


let p1 = new Punto(0,4)
let p2 = new Punto(3,0)


p1.moverX(5)

console.log(`La distancia entre ${p1.distancePoints(p2)}`)
