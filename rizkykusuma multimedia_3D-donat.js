function setup() {

  createCanvas(400, 400, WEBGL); // Menggunakan mode WEBGL

}

function draw() {

  background(220);

  // Rotasi bentuk

  rotateX(frameCount * 0.01);

  rotateY(frameCount * 0.01);

  // Warna dan bentuk torus

  fill(100, 200, 150);

  stroke(0);

  torus(100, 30); // Membuat torus dengan radius utama 100 dan radius tabung 30

}





