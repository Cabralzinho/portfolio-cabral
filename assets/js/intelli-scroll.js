function checkVisibility() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && window.innerHeight >= rect.top) {
      const navBarItems = document.querySelectorAll("#navbar li a");

      navBarItems.forEach((navBarItem) => {
        const navBarItemUrl = new URL(navBarItem.href);

        if (navBarItemUrl.hash === `#${section.id}`) {
          navBarItem.classList.add("text-gradient-primary");
          history.replaceState(
            {},
            "",
            `${navBarItemUrl.pathname}${navBarItemUrl.hash}`
          );
        } else {
          navBarItem.classList.remove("text-gradient-primary");
        }
      });
    }
  });
}

// Adicionar um ouvinte de evento para verificar a visibilidade no scroll
window.addEventListener("scroll", checkVisibility);

// Verificar a visibilidade inicial
checkVisibility();
