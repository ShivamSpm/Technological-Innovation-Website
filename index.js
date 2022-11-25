const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
  }
}

toggle.addEventListener("click", toggleMenu, false);

const navBarItems = document.querySelectorAll('.item');

navBarItems.forEach((item) => {
  const currPage = item.getElementsByTagName("a")[0].getAttribute("href");
  if(location.href.includes(currPage)){
    item.classList.add("active-page");
  }
});

