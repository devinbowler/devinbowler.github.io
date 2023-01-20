function openmenu(){
    document.querySelector(".nav-links").style.display = "block";
    document.querySelector(".menu-trigger").style.display = "none";
  }
  function closemenu(){
    document.querySelector(".nav-links").style.display = "none";
    document.querySelector(".menu-trigger").style.display = "block";
  }
  window.onresize = function(){
      if(window.innerWidth > 600){
        console.log("menu trigger")
        document.querySelector(".nav-links").style.display = "block";
        document.querySelector(".menu-trigger").style.display = "none";
        document.querySelector(".close-nav").style.display = "none";
      }else{
        document.querySelector(".nav-links").style.display = "none";
        document.querySelector(".menu-trigger").style.display = "block";
        document.querySelector(".close-nav").style.display = "block";
      }
  }

  var cardBackgrounds = {
    1: "url('images/image.png')",
    2: "url('images/image (2).png')",
    3: "url('images/image (4).png')"
}

function flip(cardNumber) {
    var card = document.querySelector(`.project:nth-child(${cardNumber}) .content`);
    var originalBackground = card.style.background;
    card.style.transition = "transform 1s";
    card.querySelector("h1").style.transition = "opacity 1s";
    card.querySelector("p").style.transition = "opacity 1s";
    card.style.transform = card.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
    card.querySelector("h1").style.opacity = card.querySelector("h1").style.opacity === "0" ? "1" : "0";
    card.querySelector("p").style.opacity = card.querySelector("p").style.opacity === "0" ? "1" : "0";
    var tags = card.querySelector(".tags");
    var refreshBtn = card.querySelector(".fa-refresh");
    tags.style.display = tags.style.display === "none" ? "block" : "none";
    if (card.style.transform === "rotateY(180deg)") {
        card.style.backgroundImage = cardBackgrounds[cardNumber];
        card.style.transformStyle = "preserve-3d";
        card.classList.add('flipped');
      } else {
        card.style.background = originalBackground;
        card.style.backgroundImage = "none";
        card.classList.remove('flipped');
      }
  }

