console.log("Ready");

var w;

//walker constructor function
function Walker() {
    this.pos = createVector(width / 2, height / 2);
    //create a pos vector replaces the below two lines
    //this.x = width/2;
    //this.y = height/2;
    this.vel = createVector(0, 0); //create a velociy vector. Put it in upadte function for the vibration effect

    //this.acc = createVector(0,0.1);
    //this.acc = p5.Vector.fromAngle(random(TWO_PI))//create an vector with random angle

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);//get the mouse pointer coordinates

        this.acc = p5.Vector.sub(mouse, this.pos);//subtract the mouse and position vector and store the value as acc vector. This is called static. 


        //this.acc = createVector(random(-1, 1), random(-1, 1));//put this outside upadte to get smooth falling down effect

        //this.acc.normalize();//normalizes the acc vector's magnitude to 1;

        //this.acc.mult(0.01);//scaling up the acc vector i.e multiplying operator and updating acc. If used with normalize mult sets the mag to be normalised

        //this.acc.rotate(0.1);//rotates the vector 

        this.acc.setMag(0.4);//normalize and mmult in one function.

        this.vel.add(this.acc);//add accelaration vector to velocity vector and upadte vel's value
        this.pos.add(this.vel); //add the position vector to random vector(vel) and updating pos and replacing the below lines
        // this.pos.x = this.pos.x + random(-3, 3);
        // this.pos.y = this.pos.y + random(-3, 3);

    }
    this.display = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 20, 20);//ellipse(x,y,radiux_x,radius_y)

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