console.log("Ready");

var w;

//walker constructor function
function Walker(){
    this.x = width/2;
    this.y = height/2;

    this.display = function(){
        fill(255);
        ellipse(this.x,this.y,48,48);
    }

    this.walk = function(){
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
    }

}

//Setup the canvas and instantiate a new walker
function setup(){
    createCanvas(640,360);
    w = new Walker();
}

//Draw the element
function draw(){
    background(51);
    w.walk();
    w.display();
}