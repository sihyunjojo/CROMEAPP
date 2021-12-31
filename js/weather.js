function onGeoOk(position) {
    console.log(position); // 포지션 안에 속성을 보면 위도와 경도가 있음
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng); // 살고 있는 위치를 위도와 경도로 함
}

function onGeoOkError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoOkError) 
//이거만하면 브라우저에서 위치 좌표를 줌
//succes 함수에는 하나의 object인자를 받음.