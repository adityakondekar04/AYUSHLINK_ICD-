const nextBtns = document.querySelectorAll(".next-step");
const prevBtns = document.querySelectorAll(".prev-step");
const formSteps = document.querySelectorAll(".form-step");
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepIndex = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (formStepIndex < formSteps.length - 1) {
      formStepIndex++;
      updateFormSteps();
      updateProgressbar();
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (formStepIndex > 0) {
      formStepIndex--;
      updateFormSteps();
      updateProgressbar();
    }
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle("active", index === formStepIndex);
  });
}

function updateProgressbar() {
  progressSteps.forEach((step, idx) => {
    step.classList.toggle("active", idx <= formStepIndex);
  });
  progress.style.width = (formStepIndex / (progressSteps.length - 1)) * 100 + "%";
}
