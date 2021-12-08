// Writing the code....
const slides = document.querySelector(".imgs > .flex"); // 슬라이드 이미지 부모요소
const slideImg = document.querySelectorAll(".imgs img") // 슬라이드 이미지
const leftBtn = document.querySelector(".btns > .leftBtn"); // 왼쪽 버튼
const rightBtn = document.querySelector(".btns > .rightBtn"); // 오른쪽 버튼
const slideLen = slideImg.length; // 이미지 갯수 => 3
let index = 0;
const slideWidth = 1200;

cloneSlide(); // 첫번째와 마지막 이미지 복제
initSlide(); // marginLeft 기본값 -1200px
setInterval(moveRight, 3000); // 자동 슬라이드
rightBtn.addEventListener('click', function () { // 오른쪽 버튼 클릭시 이벤트
    moveRight();
});
leftBtn.addEventListener('click', function() { // 왼쪽 버튼 클릭시 이벤트
    moveLeft();
});

function cloneSlide() {
    let cloneFirst = slideImg[0].cloneNode(false); // 첫번째 이미지 복제
    let cloneLast = slides.lastElementChild.cloneNode(false); // 마지막 이미지 복제
    slides.append(cloneFirst); // 마지막 이미지 다음에 복제한 첫번째 이미지 추가
    slides.insertBefore(cloneLast, slides.firstElementChild); // 첫번째 이미지 앞에 복제한 마지막 이미지 추가
}
function initSlide() {
    slides.style.marginLeft = -slideWidth + "px";
}
function moveRight() {
    if (index <= slideLen-1) {
        slides.style.marginLeft = -(index+2) * slideWidth + "px";
        slides.style.transition = '0.5s';
    }if (index === slideLen-1) {
        setTimeout(function() {
            slides.style.marginLeft = -slideWidth + "px";
            slides.style.transition = '0s';
        }, 500);
        index = -1;
    }
    index += 1;
}
function moveLeft() {
    if(index >= 0) {
        slides.style.marginLeft = -(index) * slideWidth + "px";
        slides.style.transition = '0.5s';
    }if (index === 0) {
        setTimeout(function() {
            slides.style.marginLeft = -(slideLen) * slideWidth + "px";
            slides.style.transition = '0s';
        }, 500);
        index = slideLen;
    }
    index -= 1;
}