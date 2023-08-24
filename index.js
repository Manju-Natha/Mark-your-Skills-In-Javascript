let skillList = [
  {
    skillName: "HTML",
    uniqueNo: 1,
  },
  {
    skillName: "CSS",
    uniqueNo: 2,
  },
  {
    skillName: "JavaScript",
    uniqueNo: 3,
  },
];

let skillListContainerEl = document.getElementById("skillListContainer");

function onMarkskill(labelid) {
  let labelEl = document.getElementById(labelid);
  labelEl.classList.toggle("selected");
}

function createAndAppendSkill(skill) {
  let checkboxid = "checkbox" + skill.uniqueNo;
  let labelid = "label" + skill.uniqueNo;

  let skillEl = document.createElement("li");
  skillEl.classList.add("p-1");
  skillListContainerEl.appendChild(skillEl);

  let checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.id = checkboxid;
  checkboxEl.onclick = function () {
    onMarkskill(labelid);
  };
  skillEl.appendChild(checkboxEl);

  let labelEl = document.createElement("label");
  labelEl.setAttribute("for", checkboxid);
  labelEl.classList.add("checkbox-label");
  labelEl.id = labelid;
  labelEl.textContent = skill.skillName;
  skillEl.appendChild(labelEl);
}

for (let skill of skillList) {
  createAndAppendSkill(skill);
}
