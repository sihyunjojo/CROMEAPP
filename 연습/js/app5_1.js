const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
getClock() //load되자마자 getclock()을 실행하고 뒤에 1초마다 실행 이걸지우면 처음에는 00:00으로 표시된 후에 될거다.
setInterval(getClock,1000); // 첫번째 인자는 실행하려는 함수 두번째 인자는 실행 간격시간(ms) 현재 1초



//settimeout(sayHello,5000); // 


//new Date() 날짜를 가져와줌
//const date = new Date();
//date.getDay() date.getHours() date.getMinutes()
