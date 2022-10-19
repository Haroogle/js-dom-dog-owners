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
});
