window.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("button").onclick = handlePresentation;
})

const handlePresentation = function(e){
   
    let current = document.querySelector("hp-slide.active")
    let next = current.nextElementSibling;

    while(next && next.tagName !== "HP-SLIDE"){ //if next sibling is not hp-slide look for another
        next = next.nextElementSibling;
    }
    if(next){
        current.classList.remove("active");
        next.classList.add("active");

        console.log(next)

    }
}