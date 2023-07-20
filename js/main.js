var elements = document.getElementsByTagName("button");
var hidden = true;
for (var i = 0; i < elements.length; i++) {
    const hidden_box = document.querySelector(".hidden-box")

    if (elements[i].className == 'storage-box' & hidden == true) {
        elements[i].onclick = function () {
            hidden = false;
            hidden_box.style.display = "block";
        }
    }

    if (elements[i].className == 'unhidden' & hidden == true) {
        elements[i].onclick = function () {
            hidden = false;
            hidden_box.style.display = "none";
        }
    }
}