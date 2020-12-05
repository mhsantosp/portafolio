function boton() {
  let x = document.getElementsByClassName("navbar-toggler");
  let y = document.querySelector("#nav-container");
  let a = document.querySelector("nav.navbar");
  let b = document.querySelector(".pushed");

  if (y === a){
    y.classList.add("pushed");
  }
  
  if (y === b) {
    y.classList.remove("pushed");
  }
}