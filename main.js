let cookie = document.getElementById("cookie");


let clicker = function(e) {
  e.preventDefault; // default behaviour chanceled

  // remove class
  cookie.classList.remove("bounce");

  // magic...
  void cookie.offsetWidth;

  // add class
  cookie.classList.add("bounce");
}

cookie.addEventListener("click", clicker);
