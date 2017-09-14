class Punto {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  moverX(x){
    this.x += x
  }

  moverY(y){
    this.y += y
  }

  distancePoint(p){
    const x = this.x - p.x
    const y = this.y - p.y
    return parseFloat(Math.sqrt(x * x + y * y).toFixed(2))
  }

}


let p1 = new Punto(0,4)
let p2 = new Punto(3,0)

p1.moverX(5)

console.log(`La distancia entre ${p1.distancePoint(p2)}`)
