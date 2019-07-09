
function bigImg(x){
  x.style.height = "400px";
  x.style.width = "400px";
}
function smallImg(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}
function myFunction(){
  var x = document.getElementById("test")
  if (x.style.display == "none") {
    x.style.display = "block";
x.style.color = "white"
  } else {
    x.style.display = "none";
  }
}
