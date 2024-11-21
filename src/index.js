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

  content.hasChildNodes()
    ? content.removeChild(content.lastChild)
    : console.log("I'm childless");

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
      console.log("default");
  }
});

function addHeroContent() {
  content.appendChild(hero());
}

function addMenuContent() {
  content.appendChild(menu());
}

function addContactContent() {
  content.appendChild(contact());
}
