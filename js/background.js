const images = [
    "abutterfly-4848340.jpg",
    "astronomy-1867616.jpg",
    "cat-3678858.jpg",
    "flowers-2300523.jpg",
    "plants-4572694.jpg",
    "still-life-3126536.jpg",
    "flowers-3655451.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//img태그를 생성시켜서 변수로
const bgImage = `url('img/${chosenImage}')`;

document.body.style.backgroundImage = bgImage;
//appendChild는 body에 html을 추가하는 것이다.
