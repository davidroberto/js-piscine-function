const createDomElement = (tag, text, src) => {
  const element = document.createElement(tag);

  if (text) {
    element.textContent = text;
  }

  if (src) {
    element.src = src;
  }

  return element;
};

const root = document.querySelector("#root");

const imgHome = createDomElement(
  "img",
  null,
  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
);
const titleHome = createDomElement("h1", "Hello page d'accueil", null);
const paragraphHome = createDomElement("p", "blablabla", null);

root.appendChild(imgHome);
root.append(titleHome);
root.appendChild(paragraphHome);
