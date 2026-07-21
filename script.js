const headers = document.querySelectorAll(".question-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const currentQuestion = header.closest(".question-div");

    const isActive = currentQuestion.classList.contains("active");

    document.querySelectorAll(".question-div").forEach((questiondiv) => {
      questiondiv.classList.remove("active");

      const img = questiondiv.querySelector("img");
      if (img) {
        img.src = "assets/images/icon-plus.svg";
      }
    });

    if (!isActive) {
      currentQuestion.classList.add("active");

      const currentImg = currentQuestion.querySelector("img");
      if (currentImg) {
        currentImg.src = "assets/images/icon-minus.svg";
      }
    }
  });
});
