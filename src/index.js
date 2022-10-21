console.log(data);

// WRITE YOUR CODE BELOW!
const dogList = document.querySelector(".dogs-list");

data.forEach((dogJSObject) => {
  console.log(dogJSObject);
  const dogsLi = document.createElement("li");
  dogsLi.setAttribute("class", "dogs-list__button");
  dogList.appendChild(dogsLi);
  dogsLi.innerText = dogJSObject.name;
  const dogContainer = document.querySelector(".main__dog-section");
  const dogButton = document.createElement("button");
  const dogButtonSection = document.createElement("div");
  const addDogForm = document.querySelector(".dogs-list__button--add");
  const submit = document.createElement("input");
  addDogForm.addEventListener("click", createform);
  const newLi = document.createElement("li");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("name");
    const image = document.getElementById("image");
    const bio = document.getElementById("bio");
    const newDog = {
      id: data.length + 1,
      name: name.value,
      image: image.value,
      bio: bio.value,
      isGoodDog: true,
    };
    data.push(newDog);

    newLi.setAttribute("class", "dogs-list__button");
    dogList.appendChild(newLi);
    newLi.innerHTML = newDog.name;
  });
  // Add Dogs name to the card
  function handleDogselectName(dogName) {
    dogContainer.innerHTML = "";
    const name = document.createElement("h2");
    name.innerText = dogJSObject.name;
    dogContainer.appendChild(name);
  }
  // Add dogs pic to card
  function insertDogPic(image) {
    const dogPic = document.createElement("img");
    dogPic.setAttribute("src", dogJSObject.image);
    dogContainer.appendChild(dogPic);
  }
  // Add dogs bio to card
  function dogDescription(Desc) {
    const dogBio = document.createElement("div");
    dogBio.setAttribute("class", "main__dog-section__desc");
    dogContainer.appendChild(dogBio);
    const title = document.createElement("h3");
    title.innerText = "Bio";
    dogBio.appendChild(title);
    const p = document.createElement("p");
    p.innerText = dogJSObject.bio;
    dogBio.appendChild(p);
  }

  //Adds good bot button to card
  function goodBoyButton(goodboy) {
    dogButtonSection.setAttribute("class", "main__dog-section__btn");
    dogContainer.appendChild(dogButtonSection);
    dogButtonSection.innerHTML = " ";
    const p = document.createElement("p");
    const em = document.createElement("em");
    em.innerText = "Is naughty?";
    p.innerText = em.innerText + " " + `${IsItGoodBoy(dogJSObject)}`;
    dogButtonSection.appendChild(p);

    dogButton.innerText = `${buttonText(dogJSObject)}`;
    dogButtonSection.appendChild(dogButton);
  }
  //
  function IsItGoodBoy(dogJSObject) {
    if (dogJSObject.isGoodDog === true) {
      return "No!";
    } else {
      return "Yes!";
    }
  }
  function buttonText(dogJSObject) {
    if (dogJSObject.isGoodDog === true) {
      return "Good Dog!";
    } else {
      return "Bad Dog!";
    }
  }

  function createform() {
    const dogForm = document.createElement("form");
    dogForm.setAttribute("class", "form");
    dogContainer.innerHTML = "  ";
    dogContainer.appendChild(dogForm);
    const labelDogName = document.createElement("label");
    labelDogName.setAttribute("for", "name");
    labelDogName.innerText = "Dog's name";
    dogForm.appendChild(labelDogName);
    const inputDogname = document.createElement("input");
    inputDogname.setAttribute("type", "text");
    inputDogname.setAttribute("id", "name");
    inputDogname.setAttribute("name", "name");
    dogForm.appendChild(inputDogname);
    const labelDogImg = document.createElement("label");
    labelDogImg.setAttribute("for", "image");
    labelDogImg.innerText = "Dog's picture";
    dogForm.appendChild(labelDogImg);
    const inputDogImg = document.createElement("input");
    inputDogImg.setAttribute("type", "url");
    inputDogImg.setAttribute("id", "image");
    inputDogImg.setAttribute("name", "image");
    dogForm.appendChild(inputDogImg);
    const labelDogBio = document.createElement("label");
    labelDogBio.setAttribute("for", "bio");
    labelDogBio.innerText = "Dog's bio";
    dogForm.appendChild(labelDogBio);
    const inputDogBio = document.createElement("textarea");
    inputDogBio.setAttribute("rows", "5");
    inputDogBio.setAttribute("id", "bio");
    inputDogBio.setAttribute("name", "bio");
    dogForm.appendChild(inputDogBio);

    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.setAttribute("name", "submit");
    submit.setAttribute("value", "Let's add a dog!");
    submit.setAttribute("class", "form__button");
    dogForm.appendChild(submit);
  }
  newLi.addEventListener("click", handleDogselectName);
  newLi.addEventListener("click", insertDogPic);
  newLi.addEventListener("click", dogDescription);
  newLi.addEventListener("click", goodBoyButton);

  dogsLi.addEventListener("click", handleDogselectName);
  dogsLi.addEventListener("click", insertDogPic);
  dogsLi.addEventListener("click", dogDescription);
  dogsLi.addEventListener("click", goodBoyButton);
  dogButton.addEventListener("click", (event) => {
    dogJSObject.isGoodDog = !dogJSObject.isGoodDog;
    dogButtonSection.innerHTML = " ";
    goodBoyButton(dogJSObject);
  });
});
