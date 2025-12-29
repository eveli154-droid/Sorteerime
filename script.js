const wastes = [
  { name:'Banaanikoored', cat:'Biojäätmed', img:'images/bananikoored.png' },
  { name:'Õunakoor', cat:'Biojäätmed', img:'images/ounakoor.png' },
  { name:'Jogurtitops', cat:'Pakend', img:'images/jogurtitops.png' },
  { name:'Plastpudel', cat:'Pakend', img:'images/plastpudel.png' },
  { name:'Ajaleht', cat:'Paber', img:'images/ajaleht.png' },
  { name:'Pappkast', cat:'Paber', img:'images/pappkast.png' },
  { name:'Klaaspurk', cat:'Klaas', img:'images/klaaspurk.png' },
  { name:'Pandipudel', cat:'Panditaara', img:'images/pandipudel.png' },
  { name:'Mähkmed', cat:'Segaolme', img:'images/mahkmed.png' },
  { name:'Määrdunud pitsakarp', cat:'Segaolme', img:'images/pitsakarp.png' },
  { name:'Patareid', cat:'Ohtlikud jäätmed', img:'images/patareid.png' },
  { name:'Vana telefon', cat:'Elektroonika', img:'images/telefon.png' },
  { name:'Vanad riided', cat:'Tekstiil', img:'images/riided.png' }
];

const categories = [
 ['Biojäätmed','bio'],
 ['Pakend','pakend'],
 ['Paber','paber'],
 ['Klaas','klaas'],
 ['Panditaara','panditaara'],
 ['Segaolme','segaolme'],
 ['Ohtlikud jäätmed','ohtlik'],
 ['Elektroonika','elektroonika'],
 ['Tekstiil','tekstiil']
];

let index = 0;
let score = 0;

function showWaste() {
  if (index >= wastes.length) {
    wasteName.textContent = 'Mäng läbi!';
    wasteImage.style.display = 'none';
    buttons.innerHTML = '';
    feedback.textContent = `Tulemus: ${score} / ${wastes.length}`;
    scoreText.textContent = '';
    return;
  }

  const w = wastes[index];
  wasteImage.src = w.img;
  wasteName.textContent = w.name;
  scoreText.textContent = `Punktid: ${score} / ${wastes.length}`;
  feedback.textContent = '';

  buttons.innerHTML = '';
  categories.forEach(c => {
    const btn = document.createElement('button');
    btn.textContent = c[0];
    btn.className = c[1];
    btn.onclick = () => checkAnswer(c[0]);
    buttons.appendChild(btn);
  });
}

function checkAnswer(choice) {
  if (choice === wastes[index].cat) {
    score++;
    feedback.textContent = 'Õige!';
  } else {
    feedback.textContent = 'Vale! Õige vastus: ' + wastes[index].cat;
  }
  index++;
  setTimeout(showWaste, 700);
}

showWaste();
