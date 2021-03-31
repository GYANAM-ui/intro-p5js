function preload()
{

}

function setup()
{
    canvas = createCanvas(550,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = " ";
}

function draw()
{
    image(video,0,0,550,480);
    tint(tint_color);
}

function take_snapshot()
{
     save("student.png");
}

function aplly()
{
    tint_color = document.getElementById("color_name").value;
}