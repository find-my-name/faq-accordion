const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    question.classList.toggle("mb-lg");
    const imgElement = question.querySelector("img");
    const answerElement = question.parentElement.lastElementChild;

    if (imgElement) {
      // Toggle the image source based on the current source
      if (imgElement.src.endsWith("icon-minus.svg")) {
        imgElement.src = "/assets/images/icon-plus.svg";
      } else {
        imgElement.src = "/assets/images/icon-minus.svg";
      }
    }

    answerElement.classList.toggle("hidden");
    answerElement.classList.toggle("visible");
  });
});
