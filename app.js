//Değişkenler

const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const inputText = document.getElementById("inputText");
let toDoContainer = document.getElementById("toDoContainer");


// buton etkinlikleri
addBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML = inputText.value;
  paragraph.classList.add("paragraph-style");
  inputText.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    paragraph.remove();
  });

  clearBtn.addEventListener("click", function () {
    paragraph.remove();
  });
});
