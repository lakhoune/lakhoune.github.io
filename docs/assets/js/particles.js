const particles = [];
function setup() {
  var cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.parent("particles");
  const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(255);

  particles.forEach((particle, idx) => {
    particle.update();
    particle.draw();
    particle.checkParticles(particles.slice(idx));
  });
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.size = 5;
    this.topspeed = 4;
  }

  update() {
    let vec = createVector(
      (3 * (mouseX - this.pos.x)) / width,
      (3 * (mouseY - this.pos.y)) / height
    );
    let newVec = this.vel.copy();
    newVec.add(vec);
    newVec.limit(this.topspeed);
    if (newVec.mag() > this.vel.mag()) this.pos.add(newVec);
    else this.pos.add(this.vel);

    this.edges();
  }

  draw() {
    noStroke();
    fill("rgba(0, 0, 0, 0.3)");
    circle(this.pos.x, this.pos.y, this.size * 2);
  }

  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }

    // 		if(this.pos.x > width) {
    // 			this.pos.x = 0;
    // 		}

    // 		if(this.pos.y > height) {
    // 			this.pos.y = 0;
    // 		}
  }

  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if (d < 120) {
        const alpha = map(d, 0, 120, 0, 0.25);
        stroke(`rgba(0, 0, 0, ${alpha})`);
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
