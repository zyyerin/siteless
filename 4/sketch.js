/*

2018-12-12
The Coding Train WebGL

Texture

*/

let camPos, lookAt, camAngle;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // setup camera stuff
  camPos = createVector(0, 0, height / (tan(PI / 6)));
  lookAt = createVector(0, 0, 0);
  camAngle = createVector(0, 1, 0);
  // fill(255);
  noFill();
}


function draw() {
  background(255);
  // if (camPos.z > 700) {
  //   camPos.z *= 0.999; // how far
  // }

  // lookAt.y += random(-1, 1);
  // lookAt.z += random(-1, 1);

  camPos.x = sin(frameCount * 0.005) * (2000 + mouseX);
  camPos.y = cos(frameCount * 0.006) * mouseY;
  camPos.z = cos(frameCount * 0.007) * 500;
  camera(camPos.x, camPos.y, camPos.z, lookAt.x, lookAt.y, lookAt.z, camAngle.x, camAngle.y, camAngle.z);


  for (let i = 0; i < 140; i++) {
    rotateX(frameCount * 0.00001);
    rotateY(frameCount * 0.00002);
    rotateZ(frameCount * 0.00003);
    box(200 + 25 * i);
    // sphere(400 + 10 * i);
  }
}
