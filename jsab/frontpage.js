window.onload = function(){
  document.getElementById("loadcontainer").style.display = "none";
};

function playAudio(){
    let audio1 = document.getElementById("song");
    audio1.play();
   }

    function stopAudio(){
      let audio1 = document.getElementById("song");
       audio1.pause() 
      }
function playsound(){
  let audio2 = document.getElementById("sound");
  audio2.play();
}
    
function gallery() {
  var gallery = document.getElementById("galleryLoop");
  if (gallery.style.display === "block") {
    gallery.style.display = "block";
  } else {
    gallery.style.display = "block";
  }
}
function skyrats() {
  var skyrats = document.getElementById("srLoop");
  if (skyrats.style.display === "block") {
    skyrats.style.display = "block";
  } else {
    skyrats.style.display = "block";
  }
}
function shop() {
  var shop = document.getElementById("shopLoop");
  if (shop.style.display === "block") {
    shop.style.display = "block"; 
  } else {
    shop.style.display = "block";
  }
}
function contact() {
  var contact = document.getElementById("contactLoop");
  if (contact.style.display === "block") {
    contact.style.display = "block";
  } else {
    contact.style.display = "block";
  }
}
function about() {
  var contact = document.getElementById("aboutLoop");
  if (contact.style.display === "block") {
    contact.style.display = "block";
  } else {
    contact.style.display = "block";
  }
}

function unabout() {
  var uncontact = document.getElementById("aboutLoop");
  if (uncontact.style.display === "block") {
    uncontact.style.display = "none";
  } else {
    uncontact.style.display = "none";
  }
}

function uncontact() {
  var uncontact = document.getElementById("contactLoop");
  if (uncontact.style.display === "block") {
    uncontact.style.display = "none";
  } else {
    uncontact.style.display = "none";
  }
}
function unskyrats() {
  var unskyrats = document.getElementById("srLoop");
  if (unskyrats.style.display === "block") {
    unskyrats.style.display = "none";
  } else {
    unskyrats.style.display = "none";
  }
}
function unshop() {
  var unshop = document.getElementById("shopLoop");
  if (unshop.style.display === "block") {
    unshop.style.display = "none";
  } else {
    unshop.style.display = "none";
  }
}
function ungallery() {
  var ungallery = document.getElementById("galleryLoop");
  if (ungallery.style.display === "block") {
    ungallery.style.display = "none";
  } else {
    ungallery.style.display = "none";
  }
}

function bluetouch(){
  $(bluebutton).ctx.scale(-1,1);
  bluebutton.addEventListener("touchstart", audio2.play());
}

function redtouch(){
  $(redbutton).ctx.scale(1,-1);
}

function throwtouch(){
  $(throwSwitch).ctx.scale(1,-1);
}

function ontouch(){
  $(onbutton).ctx.scale(-1,1);
}

function abouttouch(){
  $(aboutButton).ctx.scale(-1,1);
}
/*function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}*/