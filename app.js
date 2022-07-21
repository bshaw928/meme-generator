const imageUrl = document.querySelector("#image-url");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");
const memeContainer = document.querySelector(".meme-image");
const form = document.querySelector("form");

//listen for submit, load image from url
form.addEventListener("submit", function (e) {
  e.preventDefault();
  image = document.createElement("img");
  image.setAttribute("src", imageUrl.value);
  image.setAttribute("height", 400);
  image.setAttribute("width", 400);
  memeContainer.appendChild(image);

  //then get text and place inside new divs, place the new divs inside div with image
  let topTextValue = topText.value;
  let bottomTextValue = bottomText.value;
  const topDiv = document.createElement("div");
  topDiv.innerHTML = topTextValue;
  const bottomDiv = document.createElement("div");
  bottomDiv.innerHTML = bottomTextValue;
  memeContainer.appendChild(topDiv);
  memeContainer.appendChild(bottomDiv);

  // style text and place text over the meme using css positioning
  memeContainer.style.position = "relative";
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
  // or
  // imageUrl.value = "";
  // topText.value = "";
  // bottomText.value = "";

  // add removal button
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Delete Meme";
  memeContainer.appendChild(removeBtn);

  //make removal button work. **This is a bit buggy- after deleting the meme, you cannot always resubmit the form without refreshing the page first. Also, if there are multiple memes present and you delete the second one, the delete button will no longer work for the first meme.
  removeBtn.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      // memeContainer.remove();
      image.remove();
      topDiv.remove();
      bottomDiv.remove();
      e.target.remove();
      // e.target.parentElement.remove();
    }
  });
});

// Notes: When creating subsequent memes, the text from the first/prior meme disappears. I have not figured out how to fix this yet. Also, if you try to save the meme, the text will not be saved, only the image.
