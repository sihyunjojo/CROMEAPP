const title = document.querySelector("div.hello:first-child h1");

console.dir(title);
//object 중에서 on이 앞에 있는건 evnet이다.

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "mouse is here";
}

function handleMouseLeave(){
    title.innerText = "mouse is gone";
}


title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);




