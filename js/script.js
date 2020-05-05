let i = 0;
const images = [];
const time = 2000;

images[0] = "img/scr/1.png"
images[1] = "img/scr/2.png"
images[2] = "img/scr/3.png"

function changeImg() {

    document.slide.src = images[i];
    if (i <images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;