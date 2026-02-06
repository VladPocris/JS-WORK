const btns = document.querySelectorAll(".favorite-icon");

function updateButtonStatus(e){
  const btn = e.currentTarget;
  const isFilled = btn.classList.toggle("filled");
  btn.innerHTML = isFilled ? "&#10084;" : "&#9825;";
}

btns.forEach((btn) => {
  btn.addEventListener("click", updateButtonStatus)
});