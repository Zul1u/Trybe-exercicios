function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dias = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i += 1) {
  let diasDoMes = document.createElement('li');
  diasDoMes.className = 'day';
  diasDoMes.innerText += dezDaysList[i];
  days.appendChild(diasDoMes);
}

let anoNovo = document.getElementsByClassName('day')[32];
let natal = document.getElementsByClassName('day')[26];
let vesperaDeNatal = document.getElementsByClassName('day')[25];

anoNovo.className = 'day holiday';
natal.className = 'day holiday';
vesperaDeNatal.className = 'day holiday';

let sexta1 = document.getElementsByClassName('day')[5];
let sexta2 = document.getElementsByClassName('day')[12];
let sexta3 = document.getElementsByClassName('day')[19];
let sexta4 = document.getElementsByClassName('day')[26];

sexta1.className = 'day friday';
sexta2.className = 'day friday';
sexta3.className = 'day friday';
sexta4.className = 'day holiday friday';

// 2.
function botaoFeriados(string) {
  let maeDoBotao = document.querySelector('.buttons-container');
  let botao = document.createElement('button');
  botao.id = 'btn-holiday'
  botao.innerText = string;
  return maeDoBotao.appendChild(botao);
}
botaoFeriados('Feriados');

// 3.
let botom = document.getElementById('btn-holiday');
botom.addEventListener('click', feriadosColor);

function feriadosColor() {
  let holiday = document.getElementsByClassName('holiday');
  for (let i = 0; i < holiday.length; i += 1) {
    if (holiday[i].style.backgroundColor !== 'red') {
      holiday[i].style.backgroundColor = 'red';
      holiday[i].style.color = 'white';
    }  else {
      holiday[i].style.backgroundColor = 'rgb(238,238,238)';
      holiday[i].style.color = '#777';
    }
  }
}

// 4.
function sextaBotton (string) {
  let maeDaSexta = document.querySelector('.buttons-container');
  let bottonSexta = document.createElement('button');
  bottonSexta.id = 'btn-friday';
  bottonSexta.innerText = string;
  return maeDaSexta.appendChild(bottonSexta);
}
sextaBotton ('Sexta-feira');

// 5.
let fridayBotton = document.getElementById('btn-friday');
fridayBotton.addEventListener('click', sextando);

let friday = document.getElementsByClassName('friday');
let fridayDays = [];
for (let i = 0; i < friday.length; i += 1){
  fridayDays.push(friday[i].innerText);
}

function sextando () {

  for (let i = 0; i < friday.length; i += 1) {
    if (friday[i].innerText !== 'sextou!') {
      friday[i].innerText = 'sextou!';
      friday[i].style.color = 'purple'  
    } else {
      friday[i].innerText = fridayDays[i];
      friday[i].style.color = '#777'
    }
  }
}

// 6.
let containerDay = document.getElementById('days')
containerDay.addEventListener ('mouseover', dayZoom);
function dayZoom (event) {
  event.target.style.fontSize = '25px';
}

containerDay.addEventListener ('mouseout', zoomDay)
function zoomDay (event) {
  event.target.style.fontSize = '20px';
}

// 7.
let tarefas = document.querySelector('.my-tasks')
function minhasTarefas (string) {
  let tarefa = document.createElement('span');
  tarefa.innerText = string;
  tarefas.appendChild(tarefa);
}
minhasTarefas('Morrer');

// 8.
function colorTask (cor) {
  let color = document.createElement('div');
  color.style.backgroundColor = cor;
  color.className = 'task'
  tarefas.appendChild(color)
}
colorTask('red');

// 9.
let divTask = document.querySelector('.task');
divTask.addEventListener('click', taskSelected);

function taskSelected (){
  if (divTask.className === 'task') {
    divTask.className = 'task selected'
  } else{
    divTask.className = 'task'
  }
}

// 10.
containerDay.addEventListener('click', function(event){
  if (divTask.className === 'task selected'){
    event.target.style.color = 'red';
  } else {
    event.target.style.color = '#777';
  }
})