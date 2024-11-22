import "./styles.css";
import hero from "./hero";
import menu from "./menu";
import contact from "./contact";

const heroButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

const content = document.querySelector("#content");
heroButton.classList.add("active");
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
    heroButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
  content.hasChildNodes()
    ? content.removeChild(content.lastChild)
    : console.log("I'm childless");
}

function addHeroContent() {
  removeContent();
  content.appendChild(hero());
  heroButton.classList.add("active");
}

function addMenuContent() {
  removeContent();
  content.appendChild(menu());
  menuButton.classList.add("active");
}

function addContactContent() {
  removeContent();
  content.appendChild(contact());
  contactButton.classList.add("active");
}
