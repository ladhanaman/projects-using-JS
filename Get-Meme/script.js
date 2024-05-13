let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url = " https://meme-api.com/gimme/";
//Array of subreddits of your choice
let subreddits = ["wholesomememes", "memes", "dogmemes", "dankmemes"];

let getMeme = () => {
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];

  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
      let memeImg = new Image();

      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

//Call the getMeme() on button click and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);