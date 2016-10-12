var d, h, m, s, color;

function displayTime() {
    d= new Date();
    h= d.getHours();
    m= d.getMinutes();
    s=d.getSeconds();

//this adds a zero in front of the sigle digit hour
    if(h<=9)h = "0"+h;
    if(h<=9)m = "0"+m;
    if(h<=9)s = "0"+s;


//set color
color = "#" + h + m + s;

//set the time
document.body.style.background = color;

//set the time
document.getElementById("hex").innerHTML = color;


//time for change the color by the second. (not setTimeout because timeout tends to have a lag)
setInterval(displayTime, 1000);

}


//call the function
displayTime();
