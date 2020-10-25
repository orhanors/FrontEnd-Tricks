const albumDB = [
    {
      albumName: "Album 1",
      tracklist: [
        "Center",
        "Suspicion",
        "Accept",
        "Salvation",
        "Regular",
        "Border",
        "Distortion",
        "Gradual",
        "Anticipation",
        "Personal",
        "Credibility",
        "Pioneer",
      ],
    },
    {
      albumName: "Album 2",
      tracklist: [
        "Operational",
        "Position",
        "Governor",
        "Opposition",
        "Include",
        "Precede",
        "Obscure",
        "Professor",
        "Difference",
        "Construct",
      ],
    },
    {
      albumName: "Album 3",
      tracklist: [
        "Traditional",
        "Disastrous",
        "Automatic",
        "Gratis",
        "Literate",
        "Superficial",
        "Curious",
        "Miscreant",
      ],
}]

const createCards = function(){
    let card = document.querySelector(".col-3")
    let container = document.querySelector(".container .row")

    for(let i=0;i<albumDB.length;i++){
        let newCard = card.cloneNode(true);
        console.log(newCard.firstElementChild.classList.remove("hidden"))

        let cardTitle = newCard.querySelector("h5")
        cardTitle.innerText = albumDB[i].albumName;
        container.appendChild(newCard)
        
    }
}
/*Specify which element is target and fill it to the album */

const specifySelectedElement = function(){
    let currentElement = document.querySelectorAll("button");
    let body = document.querySelector("body")

    let modal = document.querySelector(".modal .modal-body")
    for(let i =0; i<currentElement.length;i++){
        if(body.classList.contains("model-open")){

        }
        currentElement[i].addEventListener("click",(e)=>{
            let parent = e.target.parentElement
            console.log(e)
            let title = parent.querySelector("h5")
            console.log(title)
            //TODO this will be applied all elements
            
           
            e.target.parentElement.classList.add("selected-element")
            
           
             
        })
    }
}

const modal = function(){

}
createCards()
specifySelectedElement()
