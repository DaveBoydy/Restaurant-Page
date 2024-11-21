import "./styles.css";
import hero from "./hero";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector("#content");
content.appendChild(hero());

// TODO Page Loader logic
const headNav = document.querySelector("#head-nav");

headNav.addEventListener("click", (e) => {
  const target = e.target.id;

  switch (target) {
    case "home":
      addHeroContent();
      break;
    case "menu":
      addMenuContent();
      break;
    case "contact":
      addContactContent();
      break;
    default:
      console.log("MissClick");
  }
});

function removeContent() {
  content.hasChildNodes()
    ? content.removeChild(content.lastChild)
    : console.log("I'm childless");
}

function addHeroContent() {
  removeContent();
  content.appendChild(hero());
}

function addMenuContent() {
  removeContent();
  content.appendChild(menu());
}

function addContactContent() {
  removeContent();
  content.appendChild(contact());
}
