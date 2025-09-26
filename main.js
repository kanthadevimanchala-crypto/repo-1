let data = {};
let selectedSubject = "";

fetch('data/content.json')
  .then(response => response.json())
  .then(json => { data = json; showSubjects(); });

function showSubjects() {
  let html = "<h2>Select Subject:</h2>";
  for (let subj in data) {
    html += `<button onclick="selectSubject('${subj}')">${subj}</button>`;
  }
  document.getElementById('subject-selection').innerHTML = html;
}

function selectSubject(subj) {
  selectedSubject = subj;
  // Show mode selection for the subject
}
