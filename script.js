document.body.style.backgroundColor = "red";
document.getElementById("aboutMe").style.backgroundColor = "blue";
document.body.style.fontFamily = "sans-serif";
document.getElementById("nickname").innerHTML = "Fido";
document.getElementById("favorites").innerHTML = "Milk";
document.getElementById("hometown").innerHTML = "London";

var x = document.getElementsByClassName("listitem");

for (var i = 0; i < x.length; i++){
    x[i].style.color = "#fff";
}

var fido = document.createElement("img");
fido.src = "http://findingfido.ca/wp-content/themes/FindingFido/images/menu_headers/considering/considering-off_en.jpg";
fido.style.borderRadius = '10px';
fido.style.boxShadow = "20px 10px 10px #000";
document.body.appendChild(fido);

