const posts = [
  {
    id: 1,
    author: "David Attemborough",
    authorImg: "https://source.unsplash.com/random/100x100/?animals/",
    date: dateTransform("08/07/2022"),
    postText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
    postImg: "https://source.unsplash.com/random/400x400/?nature,wildlife",
    likes: 23,
    NamefirstLetters: getFirstLetters("David Attemborough"),
  },
  {
    id: 2,
    author: "Samantha Cristoforetti",
    authorImg: "https://source.unsplash.com/random/100x100/?space",
    date: dateTransform("10/27/2022"),
    postText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
    postImg: "https://source.unsplash.com/random/400x400/?space,earth",
    likes: 109,
    NamefirstLetters: getFirstLetters("Samantha Cristoforetti"),
  },
  {
    id: 3,
    author: "Eddie Vedder",
    authorImg: "",
    date: dateTransform("03/11/2022"),
    postText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
    postImg:
      "https://source.unsplash.com/random/400x400/?concert,rock,music,live",
    likes: 62,
    NamefirstLetters: getFirstLetters("Eddie Vedder"),
  },
  {
    id: 4,
    author: "Elon Musk",
    authorImg: "https://source.unsplash.com/random/100x100/?tesla/",
    date: dateTransform("02/20/2022"),
    postText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
    postImg: "https://source.unsplash.com/random/400x400/?tesla",
    likes: 79,
    NamefirstLetters: getFirstLetters("Elon Musk"),
  },
  {
    id: 4,
    author: "Julian Assange",
    authorImg: "",
    date: dateTransform("02/20/2022"),
    postText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
    postImg: "https://source.unsplash.com/random/400x400/?assange",
    likes: 79,
    NamefirstLetters: getFirstLetters("Julian Assange"),
  },
];

//Container posts
const postsList = document.getElementById("container");

for (let i = 0; i < posts.length; i++) {
  const {
    id,
    author,
    authorImg,
    date,
    postText,
    postImg,
    likes,
    NamefirstLetters,
  } = posts[i];

  //Nasconde iniziali
  firstLettersClass = "hidden";
  //Le mostra se non è presente l'immagine del profilo
  if (authorImg == "") {
    firstLettersClass = "show";
    imgClass = "hidden";
  }
  //Costruisce HTML del post
  let post = `<div class="post">
<div class="post__header">
  <div class="post-meta">
    <div class="post-meta__icon">
      <img class="profile-pic" src="${authorImg}"  />
      <span id="firstLetters" class="${firstLettersClass}">${NamefirstLetters}</h2>
    </div>
    <div class="post-meta__data">
      <div class="post-meta__author">${author}</div>
      <div class="post-meta__time">${date}</div>
    </div>
  </div>
</div>
<div class="post__text">
${postText}
</div>
<div class="post__image">
  <img  src="${postImg}" alt="${author}" />
</div>
<div class="post__footer">
  <div class="likes js-likes">
    <div class="likes__cta">
      <a class="like-button js-like-button" href="#" >
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
      </a>
    </div>
    <div class="likes__counter">Piace a <b id="${id}" class="js-likes-counter">${likes}</b> persone</div>
  </div>
</div>
</div>`;
  postsList.innerHTML += post;
}

//Elementi UI
const likeBtn = document.querySelectorAll(".like-button");
const thumbsUp = document.querySelectorAll(".fa-thumbs-up");
const likes = document.querySelectorAll(".likes__counter");

//Like button
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("like-button--liked")) {
      e.target.classList.add("like-button--disliked");
      thumbsUp[i].classList.add("like-button--disliked");
      likes[i].innerHTML = --posts[i]["likes"];
      return;
    } else {
      e.target.classList.add("like-button--liked");
      thumbsUp[i].classList.add("like-button--liked");
      likes[i].innerHTML = ++posts[i]["likes"];
    }
  });
}

//!Trasforma data
function dateTransform(date) {
  const dateSplitted = date.split("/");
  let month = dateSplitted[0];
  let day = dateSplitted[1];
  let year = dateSplitted[2];
  return (newDate = `${day}/${month}/${year}`);
}

//!Ricava iniziali date 2 parole
function getFirstLetters(words) {
  const splittedWords = words.split(" ");
  const [firstWord, secondWord] = splittedWords;
  const firstLetters = firstWord[0] + secondWord[0];
  return firstLetters;
}
