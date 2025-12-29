const wastes=[
{nimi:'Banaanikoored',kategooria:'Biojäätmed',pilt:'images/bananikoored.png'},
{nimi:'Jogurtitops',kategooria:'Pakend',pilt:'images/jogurtitops.png'}
];
const cats=[['Biojäätmed','bio'],['Pakend','pakend'],['Paber','paber'],['Klaas','klaas'],['Panditaara','panditaara'],['Segaolme','segaolme'],['Ohtlikud jäätmed','ohtlik'],['Elektroonika','elektroonika'],['Tekstiil','tekstiil']];
let i=0,score=0;
function show(){
 if(i>=wastes.length){feedback.textContent='Mäng läbi!';return;}
 let w=wastes[i];
 wasteImage.src=w.pilt;
 wasteName.textContent=w.nimi;
 buttons.innerHTML='';
 cats.forEach(c=>{
  let b=document.createElement('button');
  b.textContent=c[0];b.className=c[1];
  b.onclick=()=>check(c[0]);buttons.appendChild(b);
 });
}
function check(c){
 if(c===wastes[i].kategooria){score++;score.innerHTML='Punktid: '+score;i++;show();}
 else feedback.textContent='Vale!';
}
show();