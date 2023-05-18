let values = [];

let array = ["h", "enter", "o", "ober", "ufat", "l", "a"];
let textChange = document.getElementById("change");
let text = document.getElementById("textArea");
let isLock = true;

changeTxt();
saveValuesForm();
cleanValuesForm();

function changeTxt() {
  text.addEventListener("keyup", () => {
    if (isLock) {
      textChangeFunction(encryptTextCustom, encryptText);
    } else {
      textChangeFunction(encryptTextCustomReverse, encryptTextReverse);
    }
  });
}


function encryptText(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
    .replace(/u/g, "ufat")
}


function encryptTextCustom(text, array) {
  return text
    .replace(/e/g, array[1])
    .replace(/i/g, array[2])
    .replace(/a/g, array[0])
    .replace(/o/g, array[3])
    .replace(/u/g, array[4]);
}


function textChangeFunction(func1, func2) {
  if (text.value.trim() === "") {
    textChange.value = "";
  } else {
    if (values.length > 0) {
      textChange.value = func1(text.value, values);
    } else {
      textChange.value = func2(text.value);
    }
  }
}



 



