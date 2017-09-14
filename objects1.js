const p1 = {
  x: 0,
  y: 4,
  moverX: function(x){
    this.x += x
  },
  moverY: function(y){
    this.y += y
  }
}

const p2 = {
  x: 3,
  y: 0,
  moverX: function(x){
    this.x += x
  },
  moverY: function(y){
    this.y += y
  }
}

function distance(p1,p2){
  const x = p1.x - p2.x
  const y = p1.y - p2.y
  return parseFloat(Math.sqrt(x * x + y * y).toFixed(2))
}

p1.moverX(5)

console.log(`La distancia entre ${distance(p1,p2)}`)
