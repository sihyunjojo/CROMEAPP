const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

setInterval(sayHello,5000) // 첫번째 인자는 실행하려는 함수 두번째 인자는 실행 간격시간(ms)