let tab = document.getElementsByClassName("tab");
let tabContents = document.getElementsByClassName("tab-contents");

const openTab = (tabName) => {
  let tabName1 = document.getElementById(tabName);
  for (link of tab) {
    link.classList.remove("active-link");
  }
  for (content of tabContents) {
    content.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active-link");
  tabName1.classList.add("active-content");
};

//  ------------

let sideMenu = document.getElementById("menu");

const openMenu = () => {
  sideMenu.style.right = "0";
};

const closeMenu = () => {
  sideMenu.style.right = "-40vw";
};
