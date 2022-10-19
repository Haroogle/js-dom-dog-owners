console.log(data);

// WRITE YOUR CODE BELOW!
const dogList = document.querySelector(".dogs-list");
console.log(dogList);
data.forEach((dogJSObject) => {
  console.log(dogJSObject);
  const dogsLi = document.createElement("li");
  dogsLi.setAttribute("class", "dogs-list__button");
  dogList.appendChild(dogsLi);
  dogsLi.innerText = dogJSObject.name;

  function handleDogselectName(dogName) {
    const dogContainer = document.querySelector(".main__dog-section");
    dogContainer.innerHTML = "";
    const name = document.createElement("h2");
    name.innerText = dogJSObject.name;
    dogContainer.appendChild(name);
  }
  function insertDogPic(image) {
    const dogContainer = document.querySelector(".main__dog-section");
    const dogPic = document.createElement("img");
    dogPic.setAttribute("src", dogJSObject.image);
    dogContainer.appendChild(dogPic);
  }

  dogsLi.addEventListener("click", handleDogselectName);
  dogsLi.addEventListener("click", insertDogPic);
});
