const hamburguers = document.querySelectorAll(".hamburguer");

let isOpen = false;

const openHamburguer = () => {
  const navBar = document.getElementById("navbar");
  const header = document.getElementById("header");

  navBar.classList.add("open-hamburguer");
  navBar.classList.add("flex-col");
  navBar.classList.remove("tablet:hidden");
  header.classList.add("flex-col");
  header.classList.add("tablet:px-0");
};

const closeHamburguer = () => {
  const navBar = document.getElementById("navbar");
  const header = document.getElementById("header");

  navBar.classList.remove("open-hamburguer");
  navBar.classList.remove("flex-col");
  navBar.classList.add("tablet:hidden");
  header.classList.remove("flex-col");
  header.classList.remove("tablet:px-0");
};

const closeAllHamburguer = () => {
  hamburguers.forEach((nav) => {
    closeHamburguer(nav);
  });
};

hamburguers.forEach((nav) => {
  nav.addEventListener("click", () => {
    closeAllHamburguer();

    if (isOpen) {
      closeHamburguer(nav);
    } else {
      openHamburguer(nav);
    }

    isOpen = !isOpen;
  });
});