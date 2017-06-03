document.body.style.backgroundColor = "red";
document.getElementById("aboutMe").style.backgroundColor = "blue";
document.body.style.fontFamily = "sans-serif";
document.getElementById("nickname").innerHTML = "Marx";
document.getElementById("favorites").innerHTML = "Red Wine";
document.getElementById("hometown").innerHTML = "Minneapolis";

var x = document.getElementsByClassName("listitem");

for (var i = 0; i < x.length; i++){
    x[i].style.color = "#fff";
}

var fido = document.createElement("img");
fido.src = "http://findingfido.ca/wp-content/themes/FindingFido/images/menu_headers/considering/considering-off_en.jpg";
document.body.appendChild(fido);

