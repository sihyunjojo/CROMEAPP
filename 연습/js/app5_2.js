const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');;
    const seconds = String(date.getSeconds()).padStart(2, '0');;
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock() 
setInterval(getClock,1000); 

//"1".padStart(2,"0")  길이가 1인 문자가 있다고하자 그럼 js에게 함수를 써서 길이가 2로 만들고 string의 앞쪽 부분을 늘려야한다 "0"인자로
//string.padStart(원하는 길이 , "넣어줄 숫자")