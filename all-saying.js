const saying = document.querySelector(".saying");

const word = [
    "걱정은 인생의 적이다 \n<셰익스피어>",
    "평생 살 것처럼 꿈을 꾸어라 그리고 내일 죽을 것 처럼 오늘을 살아라 \n<제임스 딘>",
    "안하고 죽어도 좋은 일만 내일로 미뤄라 \n<파블로 피카소>",
    "우리는 너무 많이 생각하고 너무 적게 느낀다 \n<찰리 채플린>",
    "한 번 실패와 영원한 실패를 혼동하지 말자 \n<F.스콧 핏제랄드>"
];

function goodWord(num){
    
    if(word[num] === word[1] && window.innerWidth < window.innerHeight){
        saying.innerText = "평생 살 것처럼 꿈을 꾸어라 \n그리고 내일 죽을 것 처럼 오늘을 살아라 \n<제임스 딘>";
    }else{
        saying.innerText = word[num];
    }
}

function genNum(){
    const result = Math.floor(Math.random()* word.length);
    return result;
}
function init(){
    const randomNumber = genNum();
    goodWord(randomNumber);
    console.log(innerHeight, innerWidth);
    
}

init();