nosex=0
nosey=0
eyex=0
eyey=0
lipx=0
lipy=0
function preload(){
clownnose=loadImage("lips-removebg-preview.png")
glassimg=loadImage("sunglasses.png")
lipsimg=loadImage("clown.png")
}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
postNet=ml5.poseNet(video,modelLoaded)

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-11;
        nosey=results[0].pose.nose.y+10;
    }
}
function modelLoaded(){
    console.log("postNetisinitiated")
}
function draw(){
image(video,0,0,300,300);
image(clownnose,nosex,nosey,20,20)
image(glassimg,eyex,eyey,35,25)
image(lipsimg,lipx,lipy,20,20)
}
function takesnapshot(){
    save("filter.png")
}
function lips(){
    postNet.on('pose',gotPoses);
clownnose.lips()
}
function gotPoses1(results){
    if(results.length>0){
        console.log(results);
        eyex=results[0].pose.nose.x-17;
        eyey=results[0].pose.nose.y-25;
    }
}
function glass(){
    postNet.on('pose',gotPoses1);
glassimg.glass()

}
function gotPoses2(results){
    if(results.length>0){
        console.log(results);
        lipx=results[0].pose.nose.x-11;
        lipy=results[0].pose.nose.y-5;
    }
}
function nose(){
    postNet.on('pose',gotPoses2);
lipsimg.nose()

}