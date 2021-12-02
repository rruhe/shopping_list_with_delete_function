let inputItem = document.getElementById("userinput");
let btnSubmit = document.getElementById("enter");
let btnDelete = document.getElementById("delete");
let ulList = document.querySelector("ul");

function setCheckboxes() {
    let i = 0;
    for (const iterator of ulList.children) {
        iterator.innerHTML = `<input type="checkbox" 
        name="cb${i}">${iterator.textContent}`;
        i++;
    }
}
setCheckboxes();

function addToList() {
    let newLi = document.createElement("li");
    newLi.textContent = inputItem.value;
    ulList.appendChild(newLi);
    inputItem.value = "";
    setCheckboxes();
}

function delFromList() {
    let i = 0;
    let liList = ulList.children;
    for (i; i < liList.length; i++) {
        let elem = liList[i];
        if (elem.childNodes[0].checked) {
            liList[i].parentNode.removeChild(elem);
            i--;
        }
    }
}

btnSubmit.addEventListener("click", addToList);
btnDelete.addEventListener("click", delFromList);
document.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        addToList();
    }
})

// const uid = function(){
//     return Date.now().toString(36) + Math.random().toString(36).substr(2);
// }

// let aUid = uid();
