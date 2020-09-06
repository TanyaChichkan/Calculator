const btnRef = document.querySelector(".openmodal");
const backdropRef = document.querySelector(".backdrop");
const closeIcon = document.querySelector(".open-icon");
const numRef = document.querySelectorAll("button");
const inputRef = document.querySelector("input");
const equals = document.querySelector(".equals");
const delBut = document.querySelector(".delete");
const earBut = document.querySelector(".earase");
const brackleftBut = document.querySelector(".brackets");
const brackrightBut = document.querySelector(".brackets");

btnRef.addEventListener("click", openremCalc);

// backdropRef.addEventListener('click', closeByBackDrop);
closeIcon.addEventListener("click", closeCalc);
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeCalc();
  }
});

// function closeByBackDrop() {
//   closeCalc();
// }

function openremCalc() {
  backdropRef.classList.toggle("is-open");
}

function closeCalc() {
  backdropRef.classList.remove("is-open");
}

function calculator() {
  for (let i = 0; i < numRef.length; i += 1) {
    // newArr.push(numRef[i].value);
    numRef[i].addEventListener("click", handler);

    function handler(event) {
      inputRef.value += event.target.value;
    }
  }

  document.addEventListener("keydown", handlerKeyboard);

  function handlerKeyboard(event) {
    function checkKey(key) {
      return (
        (key >= "0" && key <= 9) ||
        key === "+" ||
        key === "-" ||
        key === "/" ||
        key === "*" ||
        key === "Delete" ||
        key === "Backspace" ||
        key === "ArrowRight" ||
        key === "Enter" ||
        key === "ArrowLeft" ||
        (key === "BracketLeft" && key === "Shift") ||
        (key === "BracketRight" && key === "Shift") ||
        key === "Shift"
      );
    }

    if (!checkKey(event.key)) {
      event.target.value = "";
    }
  }

  delBut.addEventListener("click", handlerDel);
  function handlerDel() {
    inputRef.value = "";
  }

  equals.addEventListener("click", handlerRes);
  document.addEventListener("keydown", handlerResKey);

  function handlerRes() {
    if (inputRef.value) {
      inputRef.value = eval(inputRef.value);
    } else {
      inputRef.value = "";
    }
  }

  function handlerResKey() {
    if (event.key === "Enter") {
      handlerRes();
    }
  }

  earBut.addEventListener("click", symbolDel);
  function symbolDel() {
    const inputStr = inputRef.value;
    const index = inputStr.length;
    console.log(index - 1);
    inputRef.value = inputStr.substr(0, index - 1);
  }
}

calculator();
