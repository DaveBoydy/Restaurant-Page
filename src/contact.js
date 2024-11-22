const contactHeadline = document.createElement("h1");
contactHeadline.textContent = "Contact Us";
contactHeadline.classList.add("contact-headline");

const contactUsText = document.createElement("p");
contactUsText.classList.add("menu-text");
contactUsText.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iure ex voluptates eligendi ab sit ipsam necessitatibus dicta nam iusto, quam soluta odit, maxime qui labore sunt saepe nulla? Dolores, earum nemo.";

const contactHR = document.createElement("hr");
contactHR.classList.add("menu-hr");

const contactText = document.createElement("p");
contactText.classList.add("menu-text");
contactText.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat doloribus, sequi ratione explicabo maiores voluptatibus cumque et sapiente illum fuga non! Mollitia quo nobis minima eaque. Quibusdam et quas vero voluptas officiis non laudantium? Aliquid ea asperiores exercitationem nam dicta, ad ipsa totam commodi nobis modi cupiditate similique assumenda quaerat suscipit magni incidunt odit vero eaque consequatur est molestias cum illo animi quidem.";

export default function contact() {
  const contact = document.createElement("main");
  contact.classList.add("contact");

  contact.appendChild(contactHeadline);
  contact.appendChild(contactUsText);
  contact.appendChild(contactHR);
  contact.appendChild(contactText);

  return contact;
}
