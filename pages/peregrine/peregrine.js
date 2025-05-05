window.onload = function(){
  document.getElementById("loader").style.display = "none";
  document.getElementById("whiteOut").style.display = "none";
}

document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);

function showPage() {
  document.body.classList.remove('js-loading');
}
