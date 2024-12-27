 import {emojiList} from "./emojiList.js";


const emojiListDiv = document.querySelector("#emojiListDiv");
const input = document.querySelector("#input");

let searchresults = [...emojiList]; 


fetchEmoji(searchresults);

input.addEventListener("keyup", searchEmoji);

function fetchEmoji(list) {
  emojiListDiv.innerHTML = ""; 
  list.forEach((obj) => {
    const parent = document.createElement("div");
    parent.classList.add("parent");

    const emoji = document.createElement("p");
    emoji.classList.add("emoji");
    emoji.innerText = obj.emoji;

    const alias = document.createElement("p");
    alias.classList.add("alias");
    alias.innerText = obj.aliases.toString();

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = obj.description;

    const tags = document.createElement("p");
    tags.classList.add("tags");
    tags.innerText = obj.tags;


    parent.append(emoji, alias, description , tags);
    emojiListDiv.append(parent);
  });
}

function searchEmoji(e) {
  if (e.target.value.length > 1) {
    searchresults = emojiList.filter((obj) =>
      obj.description.includes(e.target.value)
    );
  } else {
    searchresults = [...emojiList]; 
  }
  fetchEmoji(searchresults);
}
