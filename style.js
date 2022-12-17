let x = 0
let y = 0
let w = 400
let h = 400
let l = 20

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let r = random()
  if(r>0.5){
  line(x,y+l, x + l, y)
  }else{line(x,y,x+l,y+l)}
  x=x+l
  if(x>=400){
    x=0
    y=y+l
  }
}