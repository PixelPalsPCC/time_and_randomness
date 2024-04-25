let div

function setup() {
  createCanvas(400, 200)

  background("#f00")

  textSize(24)
  fill(255, 255, 0)

  text("Unix time since the epoch is ...", 40, 60)

  // Create a div element and set its position.
  div = createDiv('p5*js')
  div.style('color', 'red')
  div.style('font-size', '24px')
  div.style('font-family', 'Arial')
  div.style('background-color', 'yellow')
  div.style('padding', '10px')
  div.style('border-radius', '10px')
  div.position(100, 80)

  text("time = new Date().getTime()", 40, 175)
}

function draw() {
  let unixtime = new Date().getTime()
  div.html(unixtime)
}









