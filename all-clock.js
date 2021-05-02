const Div = document.querySelector(".js-clock"),
H1 = Div.querySelector("h1");

function getTime(){
const date = new Date;
let second = date.getSeconds(),
minute = date.getMinutes(),
hour = date.getHours();
// if (second < 10){
//     second = `0${second}`;
//     }
// if (minute < 10){
//     minute = `0${minute}`;
//     }
// if (hour < 10){
//     hour = `0${hour}`;
// }

H1.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute} : ${
        second < 10 ? `0${second}` : second}`;

}

function init(){
getTime();
setInterval(getTime,1000);
}

init();