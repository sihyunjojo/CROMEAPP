const h1 = document.querySelector("div.hello:first-child h1");


/* document의 body,head,title 이런것들은 중요하기 때문에
document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨

나머지 element들은 querySelector나 getElementById로 불러와야된다 */

console.dir(h1);
//object 중에서 on이 앞에 있는건 evnet이다.

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!!");
}

function handleWindowOffline(){
    alert("SOS no wifi");
}

function handleWindowOnline(){
    alert("all good");
}



h1.addEventListener("click",handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);




