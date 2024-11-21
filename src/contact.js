const contactHeadline = document.createElement("h1");
contactHeadline.textContent = "Contact";
contactHeadline.classList.add("contact-headline");

export default function contact() {
  const contact = document.createElement("main");
  contact.classList.add("contact");

  contact.appendChild(contactHeadline);

  return contact;
}
