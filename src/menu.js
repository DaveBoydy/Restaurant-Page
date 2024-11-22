const starterHeadLine = document.createElement("h1");
starterHeadLine.textContent = "Starters";

const starterHR = document.createElement("hr");
starterHR.classList.add("menu-hr");

const starterText = document.createElement("p");
starterText.classList.add("menu-text");
starterText.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iure ex voluptates eligendi ab sit ipsam necessitatibus dicta nam iusto, quam soluta odit, maxime qui labore sunt saepe nulla? Dolores, earum nemo.";

const mainHeadLine = document.createElement("h1");
mainHeadLine.textContent = "Mains";

const mainHR = document.createElement("hr");
mainHR.classList.add("menu-hr");

const mainText = document.createElement("p");
mainText.classList.add("menu-text");
mainText.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat doloribus, sequi ratione explicabo maiores voluptatibus cumque et sapiente illum fuga non! Mollitia quo nobis minima eaque. Quibusdam et quas vero voluptas officiis non laudantium? Aliquid ea asperiores exercitationem nam dicta, ad ipsa totam commodi nobis modi cupiditate similique assumenda quaerat suscipit magni incidunt odit vero eaque consequatur est molestias cum illo animi quidem.";

export default function menu() {
  const menu = document.createElement("main");
  menu.classList.add("menu");

  menu.appendChild(starterHeadLine);
  menu.appendChild(starterHR);
  menu.appendChild(starterText);

  menu.appendChild(mainHeadLine);
  menu.appendChild(mainHR);
  menu.appendChild(mainText);

  return menu;
}
