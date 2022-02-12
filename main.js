function preload() {
} 

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(350, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
  
    fill (0, 128, 0);
    rect(40,40,10,400);
    rect(40,40,550,10);
    rect(40,435,550,10);
    circle(45,45,50);
    rect(595,40,10,400);
    circle(600,45,50);
    circle(600,440,50);
    circle(45,440,50);
    
}

function take_snapshot(){
    save('student_name.png');
}
