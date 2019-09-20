function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("openNav").style.display = "none";
  document.getElementById("closeNav").style.display = "flex";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("openNav").style.display = "flex";
  document.getElementById("closeNav").style.display = "none";
}
