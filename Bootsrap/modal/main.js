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

const applyModal = function(){
    let currentElement = document.querySelectorAll(".card:not(.hidden) button");
  
    
    let modalEL = document.querySelector(".modal .modal-body")

    for(let i =0; i<currentElement.length;i++){
        currentElement[i].addEventListener("click",(e)=>{ 
            modalEL.innerHTML = ""
            let title = document.querySelector(".modal-title")
            
            
            title.innerText = e.target.previousElementSibling.firstElementChild.innerText //card-title
            createModal(albumDB[i].tracklist)  
             
        })
  
    }  
}

const createModal = function(trackList){
  let body = document.querySelector("body")
    let ul = document.createElement("ul");
    
    let modal_body = document.querySelector(".modal-body")
    
    
    for(let i=0; i<trackList.length;i++){
      let li = document.createElement("li");
      li.innerText = trackList[i]
      ul.appendChild(li)
    }
    modal_body.appendChild(ul)

    
} 
createCards()
applyModal()

