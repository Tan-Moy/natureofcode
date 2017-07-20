console.log("Ready");

var w;

//walker constructor function
function Walker() {
    
    this.pos = createVector(width / 2, height / 2);
    //create a pos vector replaces the below two lines
    //this.x = width/2;
    //this.y = height/2;
    this.vel = createVector(random(-3,3),random(-3,3)); //create a velociy vector. Put it in upadte function for the vibration effect
    this.acc = createVector(0,0.1);

    this.display = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 48, 48);//ellipse(x,y,radiux_x,radius_y)
        
    }

    this.update = function () {
        this.vel.add(this.acc);//add accelaration vector to velocity vector
        this.pos.add(this.vel); //add the position vector to random vector(vel) replacing the below lines
        // this.pos.x = this.pos.x + random(-3, 3);
        // this.pos.y = this.pos.y + random(-3, 3);
    }

}

//Setup the canvas and instantiate a new walker
function setup() {
    createCanvas(640, 360);
    w = new Walker();
}

//Draw the element 
function draw() {
    background(51);
    w.update();
    w.display();
}