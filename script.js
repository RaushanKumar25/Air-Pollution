let moreElements = document.querySelectorAll(".more");
let descriptionElements = document.querySelectorAll(".description");
let dotElements = document.querySelectorAll(".dot");
let allElements = document.querySelectorAll(".all");
let checks = Array.from({ length: allElements.length }).fill(false);

allElements.forEach((all, index) => {
  all.addEventListener("click", () => {
    if (checks[index]) {
      dotElements[index].style.display = "inline";
      moreElements[index].style.display = "none";
      checks[index] = false;
    } else {
      dotElements[index].style.display = "none";
      moreElements[index].style.display = "inline";
      checks[index] = true;
    }
  });
});

let infoDiv = document.querySelector(".info");

infoDiv.addEventListener("click", () => {
  let emailAddress = 'raushankumarbhardwaj4510@gmail.com';
  let mailtoUrl = `mailto:${emailAddress}`;
  window.location.href = mailtoUrl;
});
