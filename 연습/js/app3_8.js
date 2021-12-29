//classList에는 다양한 function들이 있다 

const h1 = document.querySelector("div.hello:first-child h1");

/* function handleTitleClick(){
    const clickedClass = "clicked"; 
     if(h1.classList.contains(clickedClass) ){
         //classList들은 클래스를 목록으로 작업 할 수 있게 해준다.
         //contain은 우리가 명시한 class가 html element의 class에 포함되어 있는지 반환해줌
         //classlist가 clicked를 포함하고 있는지 확인 후 booleㅁn으로 반환해줌
        h1.classList.remove(clickedClass);
        //remove는 
    }
    else{
        h1.classList.add(clickedClass);
    }
} */

//toggle은 위에 코드를 구현한 것이다.
//포함되면 제거하고 제거됫으면 포함하고

// classname을 변경하지 않을거다
// 뒤에 clicked만 넣어줌

function handleTitleClick(){
    h1.classList.toggle("clicked")
}
//toggle function은 class name이 존재하는지 확인을 할것이다.

h1.addEventListener("click",handleTitleClick);







