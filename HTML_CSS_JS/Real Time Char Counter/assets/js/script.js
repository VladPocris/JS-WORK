const textAreaInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

function updateCharacterCount() {
  const countValue = textAreaInput.value.length;
  
  if(countValue >= 50) {
    charCount.innerHTML = `Character Count: 50/50`;
    charCount.style.color = "red";
    if(countValue > 50) {
      textAreaInput.value = textAreaInput.value.slice(0, 50);
    }
    return;
  }

  charCount.style.color = "darkslategray";
  charCount.innerHTML = `Character Count: ${countValue}/50`;
}

textAreaInput.addEventListener("input", updateCharacterCount)

