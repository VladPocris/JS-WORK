let footballTeam = {
  team: "Barcelona",
  year: 1945,
  headCoach: "Pep Guardiola",
  players: [
    {
      name: "Messi",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Bojan",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Henry",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Van Der Sar",
      position: "goalkeeper",
      isCaptain: false
    },
  ]
};

const playerCards = document.getElementById("player-cards");

function createPlayerCard(player) {
  const div = document.createElement("div");
  const header = document.createElement("h2");
  const paragraph = document.createElement("p");
    
  div.appendChild(header);
  div.appendChild(paragraph);
  playerCards.appendChild(div);

  if(player.isCaptain){
    header.textContent = `(Captain) ${player.name}`;
  } else {
    header.textContent = player.name;
  }
  paragraph.textContent = `Position: ${player.position}`;
  div.classList.add("player-card");
}

function setPlayers(players){
  playerCards.innerHTML = "";
  players.forEach((player) => {
    createPlayerCard(player);
  })
}

const selectPosition = document.getElementById("players");

function filterPlayers(position) {
  const filtered =
    position === "all"
      ? footballTeam.players
      : footballTeam.players.filter(player => player.position === position);

  setPlayers(filtered);
}

selectPosition.addEventListener("change", (e) => {
  filterPlayers(e.target.value);
});

const teamNameSpan = document.getElementById("team");
const teamYearFounded = document.getElementById("year");
const teamHeadCoach = document.getElementById("head-coach");

function setTeamInformation(team) {
  teamNameSpan.textContent = team.team;
  teamYearFounded.textContent = team.year;
  teamHeadCoach.textContent = team.headCoach; 
}

setTeamInformation(footballTeam);
filterPlayers("all");