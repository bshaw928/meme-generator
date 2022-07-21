const imageUrl = document.querySelector("#image-url");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");
const memeContainer = document.querySelector(".meme-image");
const form = document.querySelector("form");

//listen for submit, load image from url
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newMemeContainer = document.createElement("div");
  image = document.createElement("img");
  image.setAttribute("src", imageUrl.value);
  image.setAttribute("height", 400);
  image.setAttribute("width", 400);
  newMemeContainer.appendChild(image);

  //then get text and place inside new divs, place the new divs inside div with image
  let topTextValue = topText.value;
  let bottomTextValue = bottomText.value;
  const topDiv = document.createElement("div");
  topDiv.innerHTML = topTextValue;
  const bottomDiv = document.createElement("div");
  bottomDiv.innerHTML = bottomTextValue;
  newMemeContainer.appendChild(topDiv);
  newMemeContainer.appendChild(bottomDiv);

  // style text and place text over the meme using css positioning
  newMemeContainer.style.position = "relative";
  topDiv.style.position = "absolute";
  bottomDiv.style.position = "absolute";
  bottomDiv.style.bottom = "20px";
  bottomDiv.style.left = "50px";
  topDiv.style.bottom = "380px";
  topDiv.style.left = "50px";
  topDiv.style.fontSize = "20px";
  bottomDiv.style.fontSize = "20px";
  bottomDiv.style.width = "300px";
  topDiv.style.width = "300px";
  topDiv.style.backgroundColor = "#ffffff";
  bottomDiv.style.backgroundColor = "#ffffff";

  // clear form inputs
  form.reset();

  // add removal button
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Delete Meme";
  newMemeContainer.appendChild(removeBtn);

  memeContainer.appendChild(newMemeContainer);

  //make removal button work
  removeBtn.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      newMemeContainer.remove();
    }
  });
});
