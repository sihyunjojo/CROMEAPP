const API_KEY = "d4ed3ed38cbde55fff070ffdf40c0314";

//network에 가면 wifi에서 어떤일일 일어나는지 보여준다.
// 우리가 뭔가를 하면 인터넷에서 어떤일이 일어나는지

function onGeoOk(position) {
    console.log(position); // 포지션 안에 속성을 보면 위도와 경도가 있음
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // 화씨온도가 기본 설정이여서 units=metric를 뒤에 넣어줌으로 통해 섭씨로 바꿈
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector('#weather span:first-child');
            const temp = document.querySelector('#weather span:nth-child(3)');
            const weather = document.querySelector('#weather span:last-child');
            city.innerText = `위치 : ${data.name}`;
            weather.innerText = `날씨 : ${data.weather[0].main} `;
            temp.innerText = `온도 : ${data.main.temp}`;
            
        }); //fetch를 통해서 url을 얻을 거고 부를거다 // 얻었으면 js에게 알려줘야한다.
        //then은 서버의 응답이 5분이라면 그 5분이후에 올 응답을 기다려야해서 then을 써줘야함

}

function onGeoOkError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoOkError);
//이거만하면 브라우저에서 위치 좌표를 줌
//succes 함수에는 하나의 object인자를 받음.