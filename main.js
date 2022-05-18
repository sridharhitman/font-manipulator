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
    
}
function gotPoses(r) {
    if(r.length > 0) {
        console.log(r);
    }
}