const body = document.body,
bg = document.querySelector(".bg");

const bgImg = "bgImg"
const realImageNum = 5;

function paintBgImg(num){
    const image = new Image();
    image.src = `image/${num+1}.jpg`;
    body.appendChild(image);
    image.classList.add(bgImg);
}
function genNum(){
    const ranNum = Math.floor(Math.random()*realImageNum);
    return ranNum;
}
function init(){
const randomNumber = genNum();
paintBgImg(randomNumber);
}

init();