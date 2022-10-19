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
  function dogDescription(Desc) {
    const dogContainer = document.querySelector(".main__dog-section");
    const dogBio = document.createElement("div");
    dogContainer.appendChild(dogBio);
    const title = document.createElement("h3");
    title.innerText = "Bio"; 
    dogBio.appendChild (title)
    const p = document.createElement("p")
    p.innerText = dogJSObject.bio
    dogBio.appendChild (p)
  }

    function goodBoyButton(goodboy) {
      const dogContainer = document.querySelector(".main__dog-section__btn")
      const dogButton = document.createElement("main__dog-section__btn")
      dogContainer.appendChild(dogButton)
}
    
    
  

  dogsLi.addEventListener("click", handleDogselectName);
  dogsLi.addEventListener("click", insertDogPic);
  dogsLi.addEventListener("click", dogDescription);
  dogsLi.addEventListener("click", goodBoyButton);


});


