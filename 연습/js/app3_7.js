//style 작업은 css에서 하는게 좋다.
//style이 js에서 바뀌고 있다면
//js에서는 css 작업을 하는것은 좋지 않다.

//더 적은 코드로 원하는 것을 얻었으니 3_6보다 좋은 코드이다.


// 개발자가 직접 적은 것을 raw value라고 함
// raw string 보다 const를 통해 변수를 하는게 좋음
// 왜냐하면 오타를 생성하면 오류가 나면 한참 찾아야하고 자주하는 실수이기 때문이다.
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked sexy_font"; //clicked  sexy_font라고 두는 것은 좋은 방법은아니다.
     if(h1.className === clickedClass){ // 그러하여서 원래는 "clicked"라고 지정해 주던걸 변수로 바꿈
        h1.className = " ";
    }
    else{
        h1.className = clickedClass;
    }
}

h1.addEventListener("click",handleTitleClick);


// 이렇게 하게 되면 class의 이름이 항상 바뀌는데
// 우리는 classname를 삭제하지 않고 clicked시 class name을 바꿔주고싶다.
// 3_8에서 하겠다.