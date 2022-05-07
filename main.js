leftwrist_x = 0;
leftwrist_y = 0;
rightwrist_x = 0;
rightwrist_y = 0;
difference = 0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas= createCanvas(550,550);
    canvas.position(650,100);

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        leftwrist_x = result[0].pose.leftWrist.x;
        righttwristx= result[0].pose.rightWrist.x;
        difference = floor(leftwrist_x - rightwrist_x);
        console.log(" leftwristx : " + leftwrist_x + " rightwristx : " + rightwrist_x + " difference : " + difference);
    }
}

function draw(){
    background("white");
    textSize(difference);
    fill("blue");
    text("Aashita",250,250);
}