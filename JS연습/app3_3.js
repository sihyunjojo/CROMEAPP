const title = document.querySelector("div.hello:first-child h1");

console.dir(title);
// 여기에서 보이는 on~~ 하는건 전부 evnet이다.
// 마우스가 올라가거나 wifi가 헤제 되거나 
// event는 
function handleTitleClick(){
    console.log("title was clicked!");
}

title.addEventListener("click",handleTitleClick);
// function명 옆에 () 안넣어줌 function만 넘겨주고 실행시키는건 js가 하기때문에 
// 우리가 ()을 넣어서 실행 시킬 필요 XXX
// 클릭할 경우에 js가 저 함수를 실행 시켜주는 것을 원한다.
// 나대신에 js가 실행 시켜줌


/* title.innerText = "hello";

title.style.color = "blue"; */