for(var i = 0; i<4; i++){
    var el = document.createElement("div");
    var icon = document.createElement("img");
    el.className = "sizes";
    services.appendChild(el);
    icon.className = "images";
    el.appendChild(icon);
}
var classes = document.getElementsByClassName('sizes');
var imges = document.getElementsByClassName('images');

classes[0].style.backgroundColor = "#1ABB99";
imges[0].src = "images/programming-code.svg"
classes[1].style.backgroundColor = "#E67F22";
imges[1].src = "images/paper-plane.png"
classes[2].style.backgroundColor = "#3497DA";
imges[2].src = "images/public-museum-sign.png"
classes[3].style.backgroundColor = "#2DCC72";
imges[3].src = "images/beaker.svg"

var imgs = ["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg","p7.jpg","p8.jpg"];
for(var i = 0; i<imgs.length; i++){
    var el = document.createElement("div");
    el.className = "sizes";
    el.style.backgroundImage = "url(images/" + imgs[i] +")";
    portfolio.appendChild(el);
} 