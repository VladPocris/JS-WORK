const themes = [
  {
    name: "light",
    message: "Hello sunshine — Light theme is on!",
  },
  {
    name: "dark",
    message: "The night is yours — Dark theme is on!",
  },
  {
    name: "ocean",
    message: "Blue skies and high tides — Ocean theme is on!",
  },
  {
    name: "nord",
    message: "The frost has settled - Nord theme is on!",
  },
]

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeMenuButtons = document.querySelectorAll(`[role="menuitem"]`);
const bodyElement = document.body;
const statusMsg = document.getElementById("status");

themeSwitcherBtn.addEventListener("click", () => {
  themeDropdown.hidden = !themeDropdown.hidden;
})

themeMenuButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const themeName = btn.getAttribute("value");
    bodyElement.className = `theme-${themeName}`;
    themeDropdown.hidden = true;
    statusMsg.textContent = themes.filter(t => {
      return t.name === themeName;
    })[0].message;
  })
});