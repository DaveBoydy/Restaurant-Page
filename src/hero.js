
const heroHeadline = document.createElement("h1");
heroHeadline.textContent = "Best Steakhouse In Town";
heroHeadline.classList.add("hero-headline");

const heroText = document.createElement("p");
heroText.textContent = "Juicy Angus Burgers / Carved to Perfection";
heroText.classList.add("hero-text");

export default function hero() {
  const hero = document.createElement("main");
  hero.classList.add("hero");

  hero.appendChild(heroHeadline);
  hero.appendChild(heroText);

  return hero;
}
