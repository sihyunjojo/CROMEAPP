const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

//const는 항상 let은 가끔

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;

    if (currentColor === "blue"){  // == 값을 비교 ==값과 타입을 비교
        newColor = "tomato"
    }
    else{
        newColor = "blue";
    }

    h1.style.color = newColor;
}

h1.addEventListener("click",handleTitleClick);
