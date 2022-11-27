song= "";

function preload(){
    song = loadSound("JoJo's Bizarre Adventure Opening 1 Full『SONO CHI NO SADAME』.webm")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    Image(video, 0, 0, 600, 500);
}

function play() {
    song.play()
}

function stop() {
    song.stop()
}