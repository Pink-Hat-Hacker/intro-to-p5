function setup(){
    createCanvas(600,400);
    background(0, 246, 255);
    
}

function draw(){
    fill(255, 0, 250);
    rect(300,175,120,120);

    fill(0, 255, 76);
    rect(300,175,60,60);
    
    fill(255, 246, 0);
    rect(300,175,20,20);
    
    fill(255, 170, 0);
    ellipse(100, 100, 60, 100);
    
    fill(255,0,0);
    ellipse(50,250,80,80);
    
    fill(0,0,255);
    ellipse(300,80,80,80);
    
    strokeWeight(5);
    line(90,250,265,100);
    line(200, 0, 200 ,400);
    line(0, 0, 100 ,400);
    line(0, 200, 600 ,200);
    
}