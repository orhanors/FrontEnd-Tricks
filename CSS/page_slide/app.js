window.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("button.prev").onclick = prevFunc;
    document.querySelector("button.next").onclick = nextFunc;
})

const nextFunc = function(e){
    let current = document.querySelector("div.box.active")
    console.log(current)

    let next = current.nextElementSibling;

    if(next){
        current.classList.remove("active");
        next.classList.add("active")
    }
}

const prevFunc = function(e){
    
    let current = document.querySelector("div.box.active")
    let prev = current.previousElementSibling;

    if(prev){
        current.classList.remove("active");
        prev.classList.add("active")
    }
}