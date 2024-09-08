const button = document.querySelector(".but");

button.addEventListener("click", () => {
    Confetti();
});

function Confetti() {
  var triangle = confetti.shapeFromPath({ path: "M0 10 L5 0 L10 10z" });

  confetti({
    shapes: [triangle],
    particleCount: 500,
    spread: 160,
  });
}
