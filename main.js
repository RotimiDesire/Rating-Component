const btns = document.querySelectorAll(".btns span");
const rating = document.querySelector(".rating span");
const submit = document.querySelector("button");
const main = document.getElementById("main");
const thankYou = document.getElementById("thank-you");

let rate;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");

    if (active) {
      active.classList.remove("checked");
    }

    const card = e.target;
    card.classList.add("checked");

    rate = card.innerText;
  });
});

submit.addEventListener("click", () => {
  if (rate) {
    rating.innerText = rate;
    main.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
});
