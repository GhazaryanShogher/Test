for(var i = 0; i<4; i++){
    var el = document.createElement("div");
    el.className = "sizes";
    services.appendChild(el);
}
var classes = document.getElementsByClassName('sizes');
classes[0].style.backgroundColor = "#1ABB99";
classes[0].style.marginLeft = 0;
classes[1].style.backgroundColor = "#E67F22";
classes[2].style.backgroundColor = "#3497DA";
classes[3].style.backgroundColor = "#2DCC72";

var imgs = ["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg","p7.jpg","p8.jpg"];
for(var i = 0; i<imgs.length; i++){
    var el = document.createElement("div");
    el.className = "sizes";
    el.style.backgroundImage = "url(images/" + imgs[i] +")";
    portfolio.appendChild(el);
} 