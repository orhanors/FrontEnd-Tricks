let num1 = 1
let num2 = -1

const sortElements = function(){

    let listEl = document.getElementById("itemsList")

    let items = Array.from(listEl.children)

    items
    .sort((a,b)=>{
        return a.innerText > b.innerText ? num1 : num2
    })
    .map(item => listEl.appendChild(item))

    let tmp = num1;
    num1 = num2;
    num2 = tmp
    selectedOption()
}

const selectedOption = function(){
    let select = document.getElementById("slct")
    console.log(select.options[select.selectedIndex])
}
window.onload = function(){
    
    let btn = document.querySelector("#btn")

    btn.addEventListener("click",sortElements)
}