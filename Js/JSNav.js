document.getElementById("toggleButton").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    var html = document.documentElement;
    var header = document.querySelector('header');
  
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex";
      html.classList.add("no-scroll");
      header.classList.add("no-backdrop");
    } else {
      menu.style.display = "none";
      html.classList.remove("no-scroll");
      header.classList.remove("no-backdrop");
    }
  });