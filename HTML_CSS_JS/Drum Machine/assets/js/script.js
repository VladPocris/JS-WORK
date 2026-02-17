const bankOne = [{
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3'
}, {
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3'
}, {
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3'
}, {
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3'
}, {
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3'
}, {
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3'
}, {
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3'
}, {
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3'
}, {
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3'
}];
const bankTwo = [{
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_1.mp3'
}, {
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_2.mp3'
}, {
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_3.mp3'
}, {
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Give_us_a_light.mp3'
}, {
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Dry_Ohh.mp3'
}, {
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Bld_H1.mp3'
}, {
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/punchy_kick_1.mp3'
}, {
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/side_stick_1.mp3'
}, {
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://cdn.freecodecamp.org/curriculum/drum/Brk_Snr.mp3'
}];
const drumKeys = document.querySelectorAll(".drum-pad");
const displayText = document.getElementById("display");
const powerSwitch = document.getElementById("power-switch");
const powerStatus = document.getElementById("current-power-status");
const volumeSlider = document.getElementById("volume-control");
const bankSwitch = document.getElementById("bank-toggle");
const bankStatus = document.getElementById("current-bank");
let isPowered = true;
let displayTextChanged = false;

function playKey(e) {
  if (!e || !isPowered) return;
  const key = e.target.textContent.trim();
  const sound = e.target.id.replaceAll("-", " ");
  const audioEl = document.getElementById(key);
  audioEl.play();
  displayText.textContent = sound;
  displayTextChanged = false;
}

drumKeys.forEach(key => {
  key.addEventListener(("click"), (e) => {
    playKey(e);
  })
})

document.addEventListener("keydown", (e) => {
  const keyPressed = e.key.toUpperCase();
  const matchedPad = [...drumKeys].find(
  pad => pad.textContent.trim() === keyPressed
);

  if (matchedPad) playKey({ target: matchedPad });
})

powerSwitch.addEventListener("click", (e) => {
  if(e.target.checked)
  {
    isPowered = true;
    powerStatus.textContent = "On";
  } else {
    isPowered = false;
    display.textContent = "";
    powerStatus.textContent = "Off";
  }
})

volumeSlider.addEventListener("input", (e) => {
  const newVolume = Math.floor(e.target.value * 100);
  displayText.textContent = `Volume: ${newVolume}`;
  displayTextChanged = true;
  drumKeys.forEach((pad) => {
    const audio = document.getElementById(pad.textContent.trim());
    audio.volume = e.target.value;
  })
  setTimeout(() => {
  if(displayTextChanged) displayText.textContent = "";
}, 1000);
})

bankSwitch.addEventListener("click", (e) => {
  display.textContent = "";
  displayTextChanged = false;
  if(e.target.checked)
  {
    bankStatus.textContent = "Heater Kit";
    drumKeys.forEach((pad) => {
      const key = pad.textContent.trim();
      const audio = document.getElementById(key);

      audio.src = bankOne.find(
  key => key.keyTrigger === audio.id.toUpperCase()
).url;
      pad.id = bankOne.find(
  key => key.keyTrigger === audio.id.toUpperCase()
).id;
    });

  } else {
    bankStatus.textContent = "Smooth Piano Kit";
    drumKeys.forEach((pad) => {
      const key = pad.textContent.trim();
      const audio = document.getElementById(key);

      audio.src = bankTwo.find(
  key => key.keyTrigger === audio.id.toUpperCase()
).url;
      pad.id = bankTwo.find(
  key => key.keyTrigger === audio.id.toUpperCase()
).id;
    });
  }
})