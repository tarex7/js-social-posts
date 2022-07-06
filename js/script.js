const posts = [
  {
    id: 1,
    author: "David Attemborough",
    authorImg: "https://source.unsplash.com/random/100x100/?people,wildlife",
    date: dateTransform("08/07/2022"),
    postText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
    postImg: "https://source.unsplash.com/random/400x400/?nature,wildlife",
    likes: 23,
  },
  {
    id: 2,
    author: "Samantha Cristoforetti",
    authorImg: "https://source.unsplash.com/random/100x100/?people,space",
    date: dateTransform("10/27/2022"),
    postText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
    postImg: "https://source.unsplash.com/random/400x400/?space,earth",
    likes: 109,
  },
  {
    id: 3,
    author: "Eddie Vedder",
    authorImg: "https://source.unsplash.com/random/100x100/?vedder",
    date: dateTransform("03/11/2022"),
    postText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
    postImg: "https://source.unsplash.com/random/400x400/?concert,rock",
    likes: 62,
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
  },
];

const postsList = document.getElementById("container");

for (let i = 0; i < posts.length; i++) {
  const { id, author, authorImg, date, postText, postImg, likes } = posts[i];

  let post = `<div class="post">
<div class="post__header">
  <div class="post-meta">
    <div class="post-meta__icon">
      <img class="profile-pic" src="${authorImg}" alt="Phil Mangione" />
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
  <img src="${postImg}" alt="" />
</div>
<div class="post__footer">
  <div class="likes js-likes">
    <div class="likes__cta">
      <a class="like-button js-like-button" href="#" >
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
      </a>
    </div>
    <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone</div>
  </div>
</div>
</div>`;
  postsList.innerHTML += post;
}

const likeBtn = document.querySelectorAll(".like-button");
const thumbsUp = document.querySelectorAll(".fa-thumbs-up");
const likesCounter = document.querySelectorAll("#like-counter-1");

for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", (e) => {
    e.target.classList.add("like-button--liked");
    thumbsUp[i].classList.add("like-button--liked");

    likesCounter[i].innerHTML = ++posts[i]["likes"];
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
