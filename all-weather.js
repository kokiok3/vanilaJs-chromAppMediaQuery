const Api_key = "2487f1387d2188d7ddb9242cdfae5c9c";
const Coord = "coordinates";
const Weather = document.querySelector(".js-weather"),
Area = document.querySelector(".js-area");


function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_key}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        Weather.innerText = `${temp}°`;
        Area.innerText = `${place}`;

    });
}

function handleGeoFail(){
    console.log("위치가 안나옴");
    // const gg =GeolocationPositionError.message;
}

function saveCoord(dd){
    localStorage.setItem(Coord, JSON.stringify(dd));
}

function handleGeoSuccess(position){
    //이 함수의 매개변수 postiotion 은 어디서 인자를 받아오는 거지?
    const Latitude = position.coords.latitude;
    const Longitude = position.coords.longitude;
    const Position = {
        Latitude,
        Longitude
    };
    saveCoord(Position);
    //saveCoorde(인자)에서 인자 값으로 return 처럼 내보내기
    getWeather(Latitude,Longitude);
}

function askCoord(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadCoord(){
    const coord = localStorage.getItem(Coord);
    if(coord === null){
        askCoord();
    }
    else{
        const parsed = JSON.parse(coord);
        // console.log(parsed);
        // console.log(parsed.Latitude, parsed.Longitude);
        getWeather(parsed.Latitude, parsed.Longitude);
    }
}

function init(){
    loadCoord();
}

init();