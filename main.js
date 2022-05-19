noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(400, 350);
    canvas = createCanvas(400,400);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    document.getElementById('loadmsg').innerHTML = 'Loaded'
}
function draw() {
    background('#9C63F8');
    textSize(difference);
    fill('#76DEC4');
    text('text',noseX,noseY);
    
}
function gotPoses(r) {
    if(r.length > 0) {
        console.log(r);
        noseX = r[0].pose.nose.x;
        noseY = r[0].pose.nose.y;
        leftWristX = r[0].pose.leftWrist.x;
        rightWristX = r[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist " + leftWristX + " Right wrist " + rightWristX + " Difference " + difference);
    }
}