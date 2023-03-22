// UTILS

const createTag = (tagName, className, imageSource, text, parentTag) => {
  const tagElement = document.createElement(tagName);

  tagElement.classList.add(className);

  if (imageSource !== null) {
    tagElement.setAttribute("src", imageSource);
  }

  if (text !== null) {
    tagElement.textContent = text;
  }

  parentTag.append(tagElement);
};
// PAGE 1

const root = document.querySelector("#root");

createTag("header", "header", null, null, root);
createTag("main", "main", null, null, root);
createTag("footer", "footer", null, null, root);

// cibler la balise main et la stocker dans une variable
const mainTag = document.querySelector(".main");

createTag(
  "img",
  "img-main",
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  null,
  mainTag
);
createTag("h1", "title-page-1", null, "Bonjour La piscine", mainTag);
createTag("p", "text-page-1", null, "blabblablalablalabla", mainTag);
createTag("p", "text-page-1", null, "blabblablalablalabla 2", mainTag);

// PAGE 2

// créer un lien
createTag("button", "link-to-articles", null, "Voir les articles", mainTag);
// cibler le lien et ajouter un event listener
const button = document.querySelector(".link-to-articles");

button.addEventListener("click", () => {
  // efface le HTML actuel sauf le header et le footer
  mainTag.innerHTML = "";
  // on créé le HTML (via le js) contenant les articles
  createTag(
    "img",
    "image-article-1",
    "https://i.pinimg.com/originals/78/42/f7/7842f71d6effc42f30d4c98b3e6b1e04.jpg",
    null,
    mainTag
  );
  createTag("h2", "title-article-1", null, "mon chien rutilant", mainTag);

  createTag("img", "image-article-2", "https://i.ytimg.com/vi/wdqJ03HcGVI/maxresdefault.jpg", null, mainTag);
  createTag("h2", "title-article-1", null, "mon chien rutilant 2", mainTag);

  createTag(
    "img",
    "image-article-3",
    "https://i0.wp.com/www.passion-animaux.com/wp-content/uploads/2014/04/24-photos-animaux-pas-en-leur-faveur2.jpg?resize=618%2C816",
    null,
    mainTag
  );
  createTag("h2", "title-article-3", null, "mon chien rutilant 3", mainTag);

  createTag(
    "img",
    "image-article-1",
    "https://i.pinimg.com/736x/01/73/08/01730883e6b0581a6038a00248cfc592--funny-animal-quotes-funny-animals.jpg",
    null,
    mainTag
  );
  createTag("h2", "title-article-1", null, "mon chien rutilant 4", mainTag);
});
