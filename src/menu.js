const menuHeadline = document.createElement("h1");
menuHeadline.textContent = "Menu";
menuHeadline.classList.add("menu-headline");

export default function menu() {
  const menu = document.createElement("main");
  menu.classList.add("menu");

  menu.appendChild(menuHeadline);

  return menu;
}
