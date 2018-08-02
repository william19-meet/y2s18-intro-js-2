// Put all your JavaScript in this file!
//function changeColor(){
//	var x =prompt("what color do you want?")
function myFunction() {
	var y = document.getElementById("myAudio");
    var x = document.getElementById("myDIV");
    var z = document.getElementById("mytext");
    var b = document.getElementsByTagName("body");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.play();
    } else {
        x.style.display = "none";
    }

    if (z.style.display === "block") {
        z.style.display = "none";
    }
    b.style.backgroundColor = "black"
}