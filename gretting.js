const form = document.querySelector(".js-form"),
 input = document.querySelector("input"),
 greeting = document.querySelector(".js-greetings");

const SHOWING = "showing";

// 텍스트를 표현하는 함수
function writeText(text){
  form.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerText = `Hello!! ${text}`
  
}

// 로컬 스토리지에 값을 저장하는 함수
function saveText(text) {
  localStorage.setItem("name", text)
}

// 로컬스토리지에 발생한 값을 감지하는 함수.
function handleSubmit(event){
  event.preventDefault(); // 기존의 새로고침 기능을 막기 위해 사용된 함수
  const currentValue = input.value;
  writeText(currentValue);
  saveText(currentValue);
}

// 입력하기 위해 텍스트 박스를 활성화 하는 함수
function askForText() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit)
}

// 등록된 이름이 없다면 텍스트 박스를 띄워주고 있다면 글을 띄워주는 함수
function loadName(){
  const currentName = localStorage.getItem("name");
  if (currentName === null){
    askForText(); // 1. 설정된 이름이 없다. 2. 물어보기 위한 질문 창을 열어준다. 3.값을 입력 받는다. 4. 저장한다. 5. 이벤트가 발생했으니 리로드 한다.
  } else {
    writeText(currentName);
  }
}

// 메인함수
function init() { 
  loadName()
}

init();